function changeMe(arr) {
  var result = []
  for(var i = 0; i < arr.length; i++){
    // console.log(arr[i])
    var newObj = {}
    newObj.firstName = arr[i][0]
    newObj.lastName = arr[i][1]
    newObj.gender = arr[i][2]
    newObj.age = arr[i][3] === undefined ? 'Invalid Birth Year' : arr[i][3]
    result.push(newObj)
  }
  console.log(result)
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""