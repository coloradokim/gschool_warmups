

function countWords (arr) {
  return arr.reduce(function(prev, curr) {
    prev[curr] != undefined ? prev[curr] ++ : prev[curr] = 1
    return prev
  }, {})
}


console.log(countWords(['dog', 'cat', 'dog', 'dog', 'bird']));
