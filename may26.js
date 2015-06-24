// Write a function that takes two arrays and returns
// a new array with all items in alphabetical order.

var alphaAnimal = function (arr1, arr2) {
  return arr1.concat(arr2).sort()
}

var array1 = [ "cat",  "fish", "zebra", "dog" ],
    array2 = [ "lion", "aardvark", "gorilla" ]
console.log(alphaAnimal(array1, array2));



   //-> [ "aardvark", "cat", "dog", "fish", "gorilla", "lion", "zebra" ]
