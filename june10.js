// Write a function that takes nested arrays and turns it into nested objects.
// If you solve it one way, then solve it another.

// function bookObj(arr) {
//   var newObj = {}
//   for (var i =0; i < arr.length; i++) {
//     newObj = arr[i]
//   }
//    return newObj
// }


var books = ["Learn to Program", "Chris Pine", 1934356360]
// ["Eloquent Javascript", "Marijn Haverbeke", 1593275846]

var testFunction = function (arr) {
var newObj = {}
return Object.keys(books).
}

console.log(testFunction(books));
// bookData(books)
// //-> {
//   "1934356360": {
//     "title": "Learn to Program",
//     "author": "Chris Pine",
//     "isbn10": 1934356360
//   },
//   "1593275846": {
//     "title": "Eloquent Javascript",
//     "author": "Marijn Haverbeke",
//     "isbn10": 1593275846
//   }
// }
