import Board from "./board.js"
import Connection from "./login.js"
import PlayerInfo from "./playerInfo.js"
import { poles } from "./static.js"
var connect = new Connection()
var game
var players = {}
window.addEventListener("DOMContentLoaded", (e) => {
    game = new startGame()
})
class startGame {
    constructor() {
        this.init()
        this.data
    }
    init() {
        document.getElementById("login").addEventListener("click", (click) => {
            connect.login()
            this.getFirstData()
            this.startMainClock()
        })
        document.getElementById("cubeButton").addEventListener("click", (click) => {
            var q = connect.cube()
            q = JSON.parse(q)
            var url = this.displayCube(q)
            var div = document.getElementById('info')
            var img = document.createElement('img')
            img.src = url
            div.appendChild(img)
        })
        document.getElementById("checkbox").addEventListener("change", (event) => {
            connect.checkbox()
        })
        players['player1'] = new PlayerInfo('Player1')
        players['player2'] = new PlayerInfo('Player2')
        players['player3'] = new PlayerInfo("Player3")
        players['player4'] = new PlayerInfo('Player4')
    }
    startMainClock() {
        setTimeout(() => {
            var x = connect.getPostsAction()
            x.then(res => {
                this.data = res
                for (var [key, value] of Object.entries(this.data.data)) {
                    if (value.nick != players[key].nick && value != '') {
                        console.log(value)
                        players[key].nick = value.nick
                        players[key].color = value.color
                        players[key].connected = true
                        players[key].paws = value.paws
                        players[key].ready = false
                        switch (value.color) {
                            case "red":
                                players[key].box.innerText = players[key].nick
                                players[key].box.style.backgroundColor = "#ed5b51"
                                players[key].paws.p1.position = 0
                                players[key].paws.p2.position = 1
                                players[key].paws.p3.position = 2
                                players[key].paws.p4.position = 3
                                break
                            case "blue":
                                players[key].box.innerText = players[key].nick
                                players[key].box.style.backgroundColor = "#51d3ed"
                                players[key].paws.p1.position = 4
                                players[key].paws.p2.position = 5
                                players[key].paws.p3.position = 6
                                players[key].paws.p4.position = 7
                                break
                            case "green":
                                players[key].box.innerText = players[key].nick
                                players[key].box.style.backgroundColor = "#51ed68"
                                players[key].paws.p1.position = 8
                                players[key].paws.p2.position = 9
                                players[key].paws.p3.position = 10
                                players[key].paws.p4.position = 11
                                break
                            case "yellow":
                                players[key].box.innerText = players[key].nick
                                players[key].box.style.backgroundColor = "#d8ed51"
                                players[key].paws.p1.position = 12
                                players[key].paws.p2.position = 13
                                players[key].paws.p3.position = 14
                                players[key].paws.p4.position = 15
                                break
                        }
                    }
                }
                for (var [key, value] of Object.entries(this.data.data)) {
                    if (value.ready) {
                        players[key].box.style.outline = '3px solid #ff0035'
                    } else {
                        players[key].box.style.border = '2px solid black'
                        players[key].box.style.outline = '0px solid #ff0035'
                    }
                }
                if (this.data.gameStarted == 1) {
                    console.log('gra się zaczęła')
                }
                if (this.data.me == "player1") {
                    document.getElementById('cubeButton').style.display = 'flex'
                }
            })
            this.startMainClock()
        }, 5000)
    }
    getFirstData() {
        var x = connect.getPostsAction()
        x.then(res => {
            console.log(res)
            this.data = res

        })
    }
    displayCube(q) {
        var url = "./cube" + q + ".png"
        console.log(url)
        return url
    }
}
Board.drawBoard()

var elem = document.getElementById("canvas")
elem.onclick = function() { alert("hello") }