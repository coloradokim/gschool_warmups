// Write a function that reverses a string.

function reverser(string) {
  var newArr = string.split('')
  return  newArr.reverse().join('')

}
console.log(reverser('code'));
// reverser('code')
//=> 'edoc'
