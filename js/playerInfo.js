export default class PlayerInfo {
    constructor(nick, color, paws) {
        this.nick = nick
        this.color = color
        this.connected = false
        this.paws = paws
        this.box
        this.ready = false
        this.init()
    }
    init() {
        console.log(this.nick)
        this.generetaBlock()
    }
    generetaBlock() {
        var box = document.createElement("div")
        this.box = box
        document.getElementsByClassName("players")[0].append(this.box)
    }
}