var side = 20;
var socket = io();



var eghanak = "winter";

var m = 30;
var n = 30;


function setup() {
    frameRate(5);
    createCanvas(m * side, n * side);
    background('#33FFFF');

}
var p = document.getElementById("Seasons");

function drawMatrix(arr) {
    var matrix = arr[0];
    var eghanak = arr[1]; 
    p.innerHTML = eghanak;
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                if (eghanak == "spring" || eghanak == "summer") {
                    fill("green");
                }
                else if (eghanak == "autumn" || eghanak == "winter") {
                    fill("white");
                }
            }
            else if (matrix[y][x] == 2) {
                if (eghanak == "spring" || eghanak == "summer") {
                    fill("yellow");
                }
                else if (eghanak == "autumn" || eghanak == "winter") {
                    fill("black");
                }
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

