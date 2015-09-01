// Given two strings, write a method to decide if one is a permutation of the other.
// A permutation is "the act of arranging all the members of a set into some sequence or order"

//1. convert a string to an array
// 2. use (probably something other than .every()).every() to compare values of array1 and array2
// 3. return true or false


var perm = function (string1, string2) {
  var str1 = string1.split("").sort().join("")
  var str2 = string2.split("").sort().join("")
  return str1 === str2
}

console.log(perm("Shannon", "Kim"));


// if (arr1 == array2) {
//   return true
// }

// First attempt with .every()
// function permutation (string, element) {
//   var array1 = string.split("")
//   return element === array1
// }
//
// console.log("kim".split("").every(permutation);
