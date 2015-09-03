// Write a function that determines if any two digit number is a Lychrel Number.
// Swap the position of each number (so 41 would become 14)
// Add it to the original number (41 + 14)
// Check if it's a palindrome (in this case 55 is one, so we'd stop)
// If not, repeat steps 1 - 3 until it is.

var findLych = function (num) {
  num2 = parseInt((num + '').split('').reverse().join(''))
  checkNum = num + num2
  if (checkNum === palindrome){
    return checkNum
  } else {
    repeat findLync with checkNum
  }
}
console.log(findLych(31));
