export default class Login {
    login() {
        let input = document.getElementById("name")
        let value = input.value
        console.log(value)
        fetch("serwer/php.php", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: "name=" + value
            })
            .then((response) => response)
            .then((data) => {
                data.json().then(function(text) {
                    console.log(text)
                })
            })
            .catch((error) => {
                console.error("Error:", error);
            });
        var canvas = document.getElementById("canvas")
        canvas.style.display = "flex"
        var name = document.getElementById("name")
        name.style.display = "none"
        var login = document.getElementById("login")
        login.style.display = "none"
    }

    async getPostsAction() {
        try {
            const headers = { "Contet-Type": "application/x-www-form-urlencoded" };
            const body = 'dataFromPHP=true'
            const server = await fetch("./serwer/php.php", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: "dataFromPHP=true"
            })
            const data = await server.json()
            return data
        } catch (error) {
            console.log(error)
        }
    }
    async checkbox() {
        var checkbox = document.getElementById('checkbox')
        var x = "changeState="
        if (checkbox.checked == false) {
            x += "false"
        } else {
            x += "true"
        }
        console.log(x)
        try {
            const headers = { "Contet-Type": "application/x-www-form-urlencoded" };
            const body = 'dataFromPHP=true'
            const server = await fetch("./serwer/php.php", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: x // to co jet wysyłane do serwera
            })
            const data = await server.json()
            return data
        } catch (error) {
            console.log(error)
        }
    }
    async cube() {
        console.log("kości zostały rzucone")
        try {
            const headers = { "Contet-Type": "application/x-www-form-urlencoded" };
            const body = 'dataFromPHP=true'
            const server = await fetch("./serwer/php.php", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: 'dupa' // to co jet wysyłane do serwera

            })
        } catch (error) {
            console.log(error)
        }
    }
}