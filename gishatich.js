var LivingCreature = require("./LivingCreature")
module.exports = class Gishatich extends LivingCreature {
    constructor(x, y) {
        super(x,y);
        this.energy = 15;
    }

    getNewDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ]
    }

    chooseCell(ch) {
        this.getNewDirections();
        return super.chooseCell(ch);
     }
     

    mult() {
        var arr = this.chooseCell(0);
        var empty = arr[Math.round(Math.random() * arr.length)]
        if (empty && this.energy > 15) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 3
            var gs = new Gishatich(newX, newY)
            gishatichArr.push(gs)
        }
    }

    move() {
        var arr = this.chooseCell(0);
        var empty = arr[Math.round(Math.random() * arr.length)]
        this.energy--;
        if (empty) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 3
            matrix[this.y][this.x] = 0

            this.x = newX
            this.y = newY
        }
    }

    eat() {
        var arr = this.chooseCell(2);
        var food = arr[Math.round(Math.random() * arr.length)]
        if (food) {
            var newX = food[0]
            var newY = food[1]
            matrix[newY][newX] = 3
            matrix[this.y][this.x] = 0

            for (var i in xotakerArr) {
                if (xotakerArr[i].x == newX && xotakerArr[i].y == newY) {
                    xotakerArr.splice(i, 1)
                }
            }

            this.x = newX
            this.y = newY
            this.energy += 3
        }
    }

    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0
            for (var i in gishatichArr) {
                if (gishatichArr[i].x == this.x && gishatichArr[i].y == this.y) {
                    gishatichArr.splice(i, 1)
                }
            }
        }
    }
}