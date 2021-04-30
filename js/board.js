export default class Board {
    constructor(canvas) {
        var canvas = this.canvas
        canvas = document.getElementById('canvas')
    }


    static drawBoard() {
        if (canvas.getContext) {
            this.drawPath()
            this.drawBases()
            console.log(this.poles)
        }
    }
    static drawCircle(x, y, r, angleStart, angleEnd, color) {
        var ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.arc(x, y, r, angleStart, angleEnd);
        ctx.fillStyle = color
        ctx.fill()
        ctx.stroke();
    };
    static drawPath() {
        let { drawCircle } = this
        drawCircle(50, 330, 30, 0, 2 * Math.PI, 'IndianRed') //17
        drawCircle(50, 400, 30, 0, 2 * Math.PI, 'bisque') //66
        drawCircle(120, 400, 30, 0, 2 * Math.PI, 'IndianRed')
        drawCircle(190, 400, 30, 0, 2 * Math.PI, 'IndianRed')
        drawCircle(260, 400, 30, 0, 2 * Math.PI, 'IndianRed')
        drawCircle(330, 400, 30, 0, 2 * Math.PI, 'IndianRed')
        drawCircle(50, 470, 30, 0, 2 * Math.PI, 'bisque') //65
        drawCircle(120, 470, 30, 0, 2 * Math.PI, 'bisque')
        drawCircle(190, 470, 30, 0, 2 * Math.PI, 'bisque')
        drawCircle(260, 470, 30, 0, 2 * Math.PI, 'bisque')
        drawCircle(330, 470, 30, 0, 2 * Math.PI, 'bisque')
        drawCircle(330, 540, 30, 0, 2 * Math.PI, 'bisque')
        drawCircle(330, 610, 30, 0, 2 * Math.PI, 'bisque')
        drawCircle(330, 680, 30, 0, 2 * Math.PI, 'bisque')
        drawCircle(330, 750, 30, 0, 2 * Math.PI, 'Khaki')
        drawCircle(400, 750, 30, 0, 2 * Math.PI, 'bisque')
        drawCircle(400, 680, 30, 0, 2 * Math.PI, 'Khaki')
        drawCircle(400, 610, 30, 0, 2 * Math.PI, 'Khaki')
        drawCircle(400, 540, 30, 0, 2 * Math.PI, 'Khaki')
        drawCircle(400, 470, 30, 0, 2 * Math.PI, 'Khaki')
        drawCircle(470, 750, 30, 0, 2 * Math.PI, 'bisque')
        drawCircle(470, 680, 30, 0, 2 * Math.PI, 'bisque')
        drawCircle(470, 610, 30, 0, 2 * Math.PI, 'bisque')
        drawCircle(470, 540, 30, 0, 2 * Math.PI, 'bisque')
        drawCircle(470, 470, 30, 0, 2 * Math.PI, 'bisque')
        drawCircle(540, 470, 30, 0, 2 * Math.PI, 'bisque')
        drawCircle(610, 470, 30, 0, 2 * Math.PI, 'bisque')
        drawCircle(680, 470, 30, 0, 2 * Math.PI, 'bisque')
        drawCircle(750, 470, 30, 0, 2 * Math.PI, 'LightGreen')
        drawCircle(750, 400, 30, 0, 2 * Math.PI, 'bisque')
        drawCircle(680, 400, 30, 0, 2 * Math.PI, 'LightGreen')
        drawCircle(610, 400, 30, 0, 2 * Math.PI, 'LightGreen')
        drawCircle(540, 400, 30, 0, 2 * Math.PI, 'LightGreen')
        drawCircle(470, 400, 30, 0, 2 * Math.PI, 'LightGreen')
        drawCircle(750, 330, 30, 0, 2 * Math.PI, 'bisque')
        drawCircle(680, 330, 30, 0, 2 * Math.PI, 'bisque')
        drawCircle(610, 330, 30, 0, 2 * Math.PI, 'bisque')
        drawCircle(540, 330, 30, 0, 2 * Math.PI, 'bisque')
        drawCircle(470, 330, 30, 0, 2 * Math.PI, 'bisque')
        drawCircle(470, 260, 30, 0, 2 * Math.PI, 'bisque')
        drawCircle(470, 190, 30, 0, 2 * Math.PI, 'bisque')
        drawCircle(470, 120, 30, 0, 2 * Math.PI, 'bisque')
        drawCircle(470, 50, 30, 0, 2 * Math.PI, 'LightSkyBlue')
        drawCircle(400, 50, 30, 0, 2 * Math.PI, 'bisque')
        drawCircle(400, 120, 30, 0, 2 * Math.PI, 'LightSkyBlue')
        drawCircle(400, 190, 30, 0, 2 * Math.PI, 'LightSkyBlue')
        drawCircle(400, 260, 30, 0, 2 * Math.PI, 'LightSkyBlue')
        drawCircle(400, 330, 30, 0, 2 * Math.PI, 'LightSkyBlue')
        drawCircle(330, 50, 30, 0, 2 * Math.PI, 'bisque')
        drawCircle(330, 120, 30, 0, 2 * Math.PI, 'bisque')
        drawCircle(330, 120, 30, 0, 2 * Math.PI, 'bisque')
        drawCircle(330, 190, 30, 0, 2 * Math.PI, 'bisque')
        drawCircle(330, 260, 30, 0, 2 * Math.PI, 'bisque')
        drawCircle(330, 330, 30, 0, 2 * Math.PI, 'bisque')
        drawCircle(260, 330, 30, 0, 2 * Math.PI, 'bisque')
        drawCircle(190, 330, 30, 0, 2 * Math.PI, 'bisque')
        drawCircle(120, 330, 30, 0, 2 * Math.PI, 'bisque')
    }
    static drawBases() {
        let { drawCircle } = this
        //red
        drawCircle(50, 50, 30, 0, 2 * Math.PI, 'Crimson')
        drawCircle(120, 50, 30, 0, 2 * Math.PI, 'Crimson')
        drawCircle(50, 120, 30, 0, 2 * Math.PI, 'Crimson')
        drawCircle(120, 120, 30, 0, 2 * Math.PI, 'Crimson')
            //yellow
        drawCircle(50, 680, 30, 0, 2 * Math.PI, 'Gold')
        drawCircle(120, 680, 30, 0, 2 * Math.PI, 'Gold')
        drawCircle(50, 750, 30, 0, 2 * Math.PI, 'Gold')
        drawCircle(120, 750, 30, 0, 2 * Math.PI, 'Gold')
            //green
        drawCircle(680, 680, 30, 0, 2 * Math.PI, 'LimeGreen')
        drawCircle(750, 680, 30, 0, 2 * Math.PI, 'LimeGreen')
        drawCircle(680, 750, 30, 0, 2 * Math.PI, 'LimeGreen')
        drawCircle(750, 750, 30, 0, 2 * Math.PI, 'LimeGreen')
            //blue
        drawCircle(680, 50, 30, 0, 2 * Math.PI, 'RoyalBlue')
        drawCircle(750, 50, 30, 0, 2 * Math.PI, 'RoyalBlue')
        drawCircle(680, 120, 30, 0, 2 * Math.PI, 'RoyalBlue')
        drawCircle(750, 120, 30, 0, 2 * Math.PI, 'RoyalBlue')
    }
}