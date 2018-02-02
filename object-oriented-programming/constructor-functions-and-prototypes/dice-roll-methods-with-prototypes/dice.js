function Dice(sides){
  this.sides = sides; 
}

// this prototype essentially is added to the constructor function Dice() with the roll property and it becomes a metheod
Dice.prototype.roll = function(){
  var randomNumber = Math.floor(Math.random() * this.sides) + 1;
  return randomNumber;
}

var dice = new Dice(6); 
var dice10 = new Dice(10);