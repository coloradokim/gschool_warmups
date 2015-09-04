// Write a function that determines if any two digit number is a Lychrel Number.
// Swap the position of each number (so 41 would become 14)
// Add it to the original number (41 + 14)
// Check if it's a palindrome (in this case 55 is one, so we'd stop)
// If not, repeat steps 1 - 3 until it is.





var findLych = function (num) {
  num2 = parseInt((num + '').split('').reverse().join(''))
  checkNum = num + num2
  if (checkNum === palindrome){ //how do I check for a palindrome?
    return checkNum
  } else {
    repeat findLync() with checkNum // how do I do this? this is recursion
  }
}
console.log(findLych(31));

// Jenny's Solution
// num = parseInt(Math.random() * 1000)
// // or try 187! don’t try 196!
// //num = 187
// startNum = num
// count = 0
// console.log(num)
// revNum = parseInt(num.toString().split('').reverse().join(''))
// console.log(revNum)
//
// while (num !== revNum){
//     num = num + revNum
//     revNum = parseInt(num.toString().split('').reverse().join(''))
//     console.log(num)
//     count += 1
// }
//
// console.log('ending number', num)
// console.log('starting number', startNum)
// console.log('count', count)
