<?php
session.save_handler=memcached;
session.save_path="${MEMCACHIER_SERVERS}";

memcached.sess_binary_protocol=1; # for ext-memcached 3 / PHP 7

memcached.sess_sasl_username="${MEMCACHIER_USERNAME}";
memcached.sess_sasl_password="${MEMCACHIER_PASSWORD}";

memcached.sess_persistent=On;
session_save_path("C:/xampp/htdocs/china/tmp");
session_start();
$mysqli = mysqli_connect('eu-cdbr-west-01.cleardb.com', 'b1bed430e98974', '64f23498', 'heroku_01bf80041e7047e');
$mysqli->query("set names urf8");
$players_table = array();
$table = get_data("SELECT * FROM `chinamen`");
if (isset($_POST["name"])) {
    echo 'asd';
    if (count($table) == 0) {
        $player_data = generate_player_data($_POST["name"], 0);
        var_dump($player_data);
        generate_table($player_data);
    } else {
        global $mysqli;
        //sprawdzaj czy są wolne pokoje do gry
        $command = "SELECT * FROM `chinamen`";
        $tables = get_data($command);
        $zmiennaPomocnicza = 0;
        foreach ($tables as $key => $table) {
            if ($table["numberOfPlayers"] < 4 && $table["canConnect"] == 0) {
                //trzeba dodać wartość "czy można się tutaj dołączyć" jeśli tak to wykona się ten if

                connect_player($table);
                echo "jestem w pierwszym ifie";
                $zmiennaPomocnicza = 1;
                break;
            }
            //jeśli nie to tworzy nowy wpis gry
        }
        if ($zmiennaPomocnicza == 0) {
            echo "jestem poza foreachem";
            $player_data = generate_player_data($_POST["name"], 0);
            generate_table($player_data);
        }
    }
} elseif (isset($_POST["dataFromPHP"])) {
    global $mysqli;
    $numberOfReady = 0;
    $ssid = $_SESSION["ssid"];
    $command = "SELECT `data`,`gameStarted`,`currentPlayer`,`skip`,`numberOfPlayers` FROM `chinamen` WHERE `id_gry`='$ssid'";
    $table = get_data($command)[0];
    $table["data"] = json_decode($table["data"], true);
    $table["me"] =  $_SESSION['player'];

    if ($table["gameStarted"] == 0) {
        foreach ($table["data"] as $key => $value) {
            if ($value != '') {
                if ($value["connected"] == false & $value["ready"] == true) {
                    $numberOfReady += 1;
                }
            }
        }
        if ($numberOfReady == $table["numberOfPlayers"]) {
            $table["gameStarted"] = 1;
        }
    }
    encode($table);
} elseif (isset($_POST["changeState"])) {
    global $mysqli;
    $ssid = $_SESSION["ssid"];
    $command = "SELECT `data` FROM `chinamen` WHERE `id_gry`='$ssid'";
    $table = get_data($command)[0];
    $table["data"] = json_decode($table["data"], true);
    if ($_POST["changeState"] == "true") {
        $table["data"][$_SESSION["player"]]["ready"] = true;
    } else {
        $table["data"][$_SESSION["player"]]["ready"] = false;
    }
    $t = json_encode($table["data"]);
    $update = "UPDATE `chinamen` SET `data` = '$t' WHERE `id_gry` = '$ssid'";
    mysqli_query($mysqli, $update);
} elseif (isset($_POST["dupa"])) {
    echo '1234565';
    // global $mysqli;
    // $cube = cube();
    // $ssid = $_SESSION["ssid"];
    // $update = "UPDATE `chinamen` SET `cube` = '$cube' WHERE `id_gry` = '$ssid'";
    // mysqli_query($mysqli, $update);
    // encode(array('drop' => $cube));
}
function encode($data)
{
    echo json_encode($data);
}
function get_data($command)
{
    global $mysqli;
    $res = $mysqli->query($command);
    $arr = $res->fetch_all(MYSQLI_ASSOC);
    return $arr;
}
function generate_string($strength = 16)
{
    $input = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $input_length = strlen($input);
    $random_string = '';
    for ($i = 0; $i < $strength; $i++) {
        $random_character = $input[mt_rand(0, $input_length - 1)];
        $random_string .= $random_character;
    }

    return $random_string;
}
function generate_table($player1)
{
    global $players_table;
    global $mysqli;
    $time = round(microtime(true) * 1000);
    $id_gry = generate_string();
    $players_table = array(
        "player1" => $player1,
        "player2" => "",
        "player3" => "",
        "player4" => "",
    );
    $_SESSION['ssid'] = $id_gry;
    $_SESSION['player'] = "player1";
    $players_table = json_encode($players_table);
    $commend = "INSERT INTO `chinamen`(`id_gry`, `data`,`numberOfPlayers`, `gameStarted`,`canConnect`,`time`,`currentPlayer`) VALUES ('$id_gry','$players_table',1,0,0,'$time','player1')";
    if (mysqli_query($mysqli, $commend)) {
    } else {
        encode("Error: " . $commend . "<br>" . mysqli_error($mysqli));
    }
    return $players_table;
}
function generate_player_data($nick, $colorIndex)
{
    $player = json_decode(file_get_contents("./playerTemplate.json"), true);
    $player["color"] = generate_color($colorIndex);
    $player["nick"] = $nick;
    return $player;
}
function generate_color($index)
{

    $colors = ["red", "blue", "green", "yellow"];
    return $colors[$index];
}
function connect_player($table)
{
    global $mysqli;
    $key = $table["id_gry"];
    $player_database = get_data("SELECT * FROM `chinamen` WHERE `id_gry`='$key'")[0];
    $numberOfPlayers = $player_database["numberOfPlayers"] + 1;
    $player_database["data"] = json_decode($player_database["data"], true);
    $data = $player_database["data"];
    $data["player" . strval($numberOfPlayers)] = generate_player_data($_POST["name"], $numberOfPlayers - 1);
    $data = json_encode($data);
    $_SESSION['ssid'] = $key;
    $_SESSION['player'] = "player" . strval($numberOfPlayers);
    if ($numberOfPlayers == 4) {
        $commend = "UPDATE `chinamen` SET `data` = '$data' , `numberOfPlayers` = '$numberOfPlayers' , `canConnect`=1 WHERE `id_gry` = '$key'";
    } else {
        $commend = "UPDATE `chinamen` SET `data` = '$data' , `numberOfPlayers` = '$numberOfPlayers' WHERE `id_gry` = '$key'";
    };

    mysqli_query($mysqli, $commend);
}
function cube()
{
    $cube = rand(1, 6);
    return $cube;
}
