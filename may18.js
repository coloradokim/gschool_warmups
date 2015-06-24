// Define a function called indexOf that takes in two arguments:
// an array, and an item that might be in the array.
// Your function should return the index of the item if it is found within the array;
// otherwise, it should return -1.

function indexOf(arr, item){
    for (var i = 0; i < arr.length; i++) {
      if(arr[i] === item) {
        return i;
      }
    }
    return -1;
}

console.log(indexOf(['a', 'b', 'c'], "c"));
