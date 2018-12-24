var LivingCreature = require("./LivingCreature")
module.exports = class Grass extends LivingCreature {

    mult(a) {
        var arr = this.chooseCell(0);
        var empty = arr[Math.round(Math.random() * arr.length)] 
        this.multiply++
        grassesBorn++
        if (empty && this.multiply > a) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 1
            var newGr = new Grass(newX, newY)
            grassArr.push(newGr)
        }
    }
}



