// Create a new instance of the object Yourself.
// You woke up this morning tired, hungry, and at home.
// Write at least three functions that change
// the state of the instance of yourself to how you feel
// and where you're at now.

var Student = function (name) {
  this.name = name
  this.energy = 0
  this.hungry = true
  this.home = true
}

Student.prototype.sleep = function (hours) {
  this.energy += hours
}

Student.prototype.eat = function (food) {
  this.hungry = false
  this.energy += food/2
}

Student.prototype.travel = function (location) {
  if (location === 'home') {
    this.home = true
  }
  else {
    this.home = false
  }
}

var kim = new Student('Kim')
console.log(kim.home + ' before');
kim.travel('galvanize')
console.log(kim.home + ' after');
kim.travel('home')
console.log(kim.home + ' after school');
