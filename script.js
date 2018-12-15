var side = 20;
var socket = io();





var m = 30;
var n = 30;


function setup() {
    frameRate(5);
    createCanvas(m * side, n * side);
    background('#33FFFF');

}


function drawMatrix(matrix) {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("Blue")
            }
            else if (matrix[y][x] == 5) {
                fill("Black")
            }
            else if (matrix[y][x] == 0) {
                fill("gray");
            }

            rect(x * side, y * side, side, side)

            /*fill("blue")
                text(x + " " + y, x * side + side / 2, y * side + side / 2)
            */
        }
    }
}
    socket.on("matrix", drawMatrix);

