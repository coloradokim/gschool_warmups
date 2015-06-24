// Write a function that takes an array
// and returns an object.
// each key is an item from the array and the
// corresponding value is how many times that item was in the array.
var list = ['a', 'b', 'c', 'a', 'b'];

var sumInstances = function(arr) {
  var newObj = {} //empty object and counter
  for(var i =0; i < arr.length; i++) {
    if (newObj[arr[i]] === undefined){
      newObj[arr[i]] = 1
    } else {
      newObj[arr[i]] += 1 //accumulator
    }
  }
  return newObj
}

console.log(sumInstances(list));
// => { a: 2, b: 2, c: 1 }
