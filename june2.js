var dogs = ["Fido", "Harleigh", "Mali", "Trixie", "Snow", "Victory"];

// var howManyDogs = function(arr) {
//   return arr.length
// }
// console.log(howManyDogs(dogs));

var nameLengths = function(arr) {
  var newArr = []
  for (var i = 0; i < arr.length; i++ ) {
     newArr.push(arr[i].length)
  }
  return newArr
}

console.log(nameLengths(dogs));
// nameLengths(dogs) // => [4, 8, 4, 6, 4, 7]
