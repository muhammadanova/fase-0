function pasanganTerbesar(num) {
  // INI KALO PAKE MATH MAX
  var arrNum = []
  var numString = String(num)
  for(var i = 0; i < numString.length; i++){
    arrNum.push(numString[i])
  }
  // console.log(arrNum)
  var maxNum = 0
  maxNum = Math.max(...arrNum)
  // console.log(maxNum)
  var tampung = 0
  for(var i = 0; i < arrNum.length; i++){
    if(arrNum[i] == maxNum){
      tampung = arrNum[i] + arrNum[i+1]
    }
  }
  // console.log(tampung)

  // INI KALO PAKE FOR LOOP ATAU CARI MAXIMUM MANUAL
  var arrNum = []
  var numString = String(num)
  for(var i = 0; i < numString.length; i++){
    arrNum.push(numString[i])
  }
  // console.log(arrNum)
  var maxNum = 0
  for(var j = 0; j < arrNum.length; j++){
    if(arrNum[j] > maxNum){
      maxNum = arrNum[j] + arrNum[j+1]
    }
  }
  // console.log(maxNum)
  return tampung + ' << INI PAKE MATH MAX \n' + maxNum + ' << INI PAKE FOR LOOP MANUAL' 
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log('------')
console.log(pasanganTerbesar(12783456)); // 83
console.log('------')
console.log(pasanganTerbesar(910233)); // 91
console.log('------')
console.log(pasanganTerbesar(71856421)); // 85
console.log('------')
console.log(pasanganTerbesar(79918293)); // 99