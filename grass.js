var LivingCreature = require("./LivingCreature")
module.exports = class Grass extends LivingCreature {

    mult() {
        var arr = this.chooseCell(0);
        var empty = arr[Math.round(Math.random() * arr.length)] 
        this.multiply++
        if (empty && this.multiply > 3) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 1
            var newGr = new Grass(newX, newY)
            grassArr.push(newGr)
        }
    }
}



