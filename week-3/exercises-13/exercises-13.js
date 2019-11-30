function targetTerdekat(arr) {
  // INI KALO PAKE INDEX OF
  // var result = 0
  // if(arr.indexOf('x') - arr.indexOf('o') > 0){
  //   // console.log(arr.indexOf('x'), arr.indexOf('o'))
  //   result = arr.indexOf('x') - arr.indexOf('o')
  // }else{
  //   // console.log(arr.indexOf('x'), arr.indexOf('o'))
  //   // console.log(arr.length)
  //   result = (arr.length-1) + (arr.indexOf('x') - arr.indexOf('o'))
  // }
  // return result

  // INI KALO PAKE LOOP FOR
  var tempX = []
  var tempO = []
  for(var i = 0; i < arr.length; i++){
    if(arr[i] == 'x'){
      tempX.push(i)
    }
    if(arr[i] == 'o'){
      tempO.push(i)
    }
  }
  console.log(tempX, ' <-- ini patokan index X')
  console.log(tempO, ' <-- ini patokan index O')
  if(tempX.length === 0){
    return 0
  }else if(tempX.length > tempO.length){
    if(tempO[tempO.length-1] > tempX[tempX.length-1]){
      return tempO[tempO.length-1] - tempX[tempX.length-1]
    }else{
      return tempX[0] - tempO[tempO.length-1]
    }
  }else{
    if(tempX[tempX.length-1] > tempO[tempO.length-1]){
      return tempX[tempX.length-1] - tempO[tempO.length-1]
    }else{
      return tempO[0] - tempX[tempX.length-1]
    }
  }
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2

// TEST CASE KALO 'o' LEBIH DARI 1
console.log(targetTerdekat([' ', 'o', ' ', 'o', 'o', ' ', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', 'o', 'o', 'o', ' ', 'x', ' ', ' '])); // 2
console.log(targetTerdekat([' ', 'o', ' ', 'o', 'x', ' ', ' ', ' '])); // 1
