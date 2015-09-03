// Pair up. Pick one person to do the typing and the other to do the talking for pair programming.
// Together, create a generic animal object that has four properties
// - what type of animal it is,
// -whether the animal is hungry,
// -what foods the animal eats, -
// and whether it is tired.
// The animal object should also have two methods
// - one to eat food (only if the food is what the animal eats)
// and another to sleep; both methods should change the corresponding object states.
// After creating the base object, create a specific animal class of your choice
// that extends the base animal.

var Animal = function(type, foods){
  this.type = type;
  this.hunger = true;
  this.tired = true;
  this.foods = foods;
};

uch
//refactor with filter?
Animal.prototype.eat = function(food) {
    if (this.foods.indexOf(food) >= 0) {
        this.hunger = false;
    }
}


Animal.prototype.sleep = function(hours){
  if(hours >= 8){
    return this.tired = false;
  }
}

var horse = new Animal('Arab', ["Grass", "Hay", "Carrots"]);
horse.eat("Grass")
console.log(horse);
