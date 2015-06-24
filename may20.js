var findGreater = function(arr, num) {
  var newArr = [];
  for (i =0; i < arr.length; i++) {
    if (arr[i] > num) {
    newArr.push(arr[i]);
    }
  }
  return(newArr);
}
console.log(findGreater([1,2,3,4,5,6,7,8], 2));
