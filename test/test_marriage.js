var Human = function Human() {
    this.name = this.constructor.name;
}

var Karl = function Karl() {
}
Karl.prototype = new Human();

var Sebrina = function Sebrina() {
}
Sebrina.prototype = new Human();

console.log("Karl" ^ "Sebrina");

function marriage(a, b) {
    if (a.name === "Karl" && b.name === "Sebrina") {
        return "Congratulations: "+a.name+" & "+b.name;
    }
    
    throw new Exception("invalid marriage");
}

console.log(marriage(Karl, Sebrina));