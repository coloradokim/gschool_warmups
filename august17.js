// Create a new instance of the object Yourself.
// You woke up this morning tired, hungry, and at home.
// Write at least three functions that change
// the state of the instance of yourself to how you feel and where you're at now.

var Kim = function () {
  this.energy = 0
}

Kim.prototype.sleep = function (hours) {
  this.energy += hours
}

Kim.prototype.appetite = function ()
