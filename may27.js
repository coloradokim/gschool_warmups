var array1 = [ "cat", "dog", "fish" ],
    array2 = [ "lion", "pointer", "trout" ]

function animalMatch(arr1, arr2) {
  var animalObject = {}
  for (var i =0; i < arr1.length; i++) {
    animalObject[arr1[i]] = 1
  }
  console.log(animalObject);
}


animalMatch(array1, array2);
    //-> animals = {
          //     cat: "lion",
          //     dog: "pointer",
          //     fish: "trout"
          //  }
