var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(8000);







var m = 30;
var n = 30;
matrix = []
function getRandInt(max) {
    return Math.round(Math.random() * Math.floor(max))
}

for (var y = 0; y < m; y++) {
    matrix[y] = []
    for (var x = 0; x < n; x++) {
        matrix[y].push(getRandInt(6))
    }
}





grassArr = [];
xotakerArr = [];
gishatichArr = [];
arjArr = [];
ocArr = [];

var Grass = require("./grass.js")
var Xotaker = require("./xotaker.js")
var Gishatich = require("./gishatich.js")
var Arj = require("./arj.js")
var Oc = require("./oc.js")

for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
        if (matrix[y][x] == 1) {
            var gr = new Grass(x, y)
            grassArr.push(gr)
        }
        else if (matrix[y][x] == 2) {
            var xt = new Xotaker(x, y)
            xotakerArr.push(xt)
        } else if (matrix[y][x] == 3) {
            var gs = new Gishatich(x, y)
            gishatichArr.push(gs)

        }
        else if (matrix[y][x] == 4) {
            var ar = new Arj(x, y)
            arjArr.push(ar)
        }
        else if (matrix[y][x] == 5) {
            var o = new Oc(x, y)
            ocArr.push(o)
        }
    }
}




setInterval(drawServerayin, 100);
function drawServerayin() {
    for (var i in grassArr) {
        grassArr[i].mult()
    }


    for (var i in xotakerArr) {
        xotakerArr[i].eat()
        xotakerArr[i].move()
        xotakerArr[i].mult()
        xotakerArr[i].die()
    }
    for (var i in gishatichArr) {
        gishatichArr[i].eat()
        gishatichArr[i].move()
        gishatichArr[i].mult()
        gishatichArr[i].die()
    }
    for (var i in arjArr) {
        arjArr[i].eat()
        arjArr[i].eat1()
        arjArr[i].move()
        arjArr[i].mult()
        arjArr[i].die()
    }
    for (var i in ocArr) {
        ocArr[i].eat()
        ocArr[i].eat1()
        ocArr[i].move()
        ocArr[i].mult()
        ocArr[i].die()
    }
    io.sockets.emit("matrix", matrix)
}


