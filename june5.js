// Write a function that reverses a string.

function reverser(string) {
  var newArr = string.split('')
  console.log(newArr);
  return newArr.reverse().toString()

}
console.log(reverser('code'));
// reverser('code')
//=> 'edoc'
