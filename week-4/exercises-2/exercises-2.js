function fpb(angka1, angka2) {
  var array1 = []
  var array2 = []
  for(var i = 1; i <= angka1; i++){
    // console.log(i, angka1)
    for(var j = angka1; j > 0; j--){
      // console.log(i, j, angka1)
      if(i * j == angka1){
        array1.push(i)
      }
    }
  }
  console.log(array1)
  for(var i = 1; i <= angka2; i++){
    // console.log(i, angka2)
    for(var j = angka2; j > 0; j--){
      // console.log(i, j, angka2)
      if(i * j == angka2){
        array2.push(i)
      }
    }
  }
  console.log(array2)
  for(var i = array1.length-1; i >= 0; i--){
    for(var j = array2.length-1; j >= 0; j--){
      // console.log(array1[i] == array2[j])
      if(array1[i] == array2[j]){
        return array1[i]
      }
    }
  }
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1
