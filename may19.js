// Use the forEach method to implement a function
// that returns the average number within an array.



getAverage([1,2,3]);
// => 2

arr.forEach


function logArrayElements(element, index, array) {
  console.log('a[' + index + '] = ' + element);
}

// Note elision, there is no member at 2 so it isn't visited
[2, 5, , 9].forEach(logArrayElements);
// logs:
// a[0] = 2
// a[1] = 5
// a[3] = 9
