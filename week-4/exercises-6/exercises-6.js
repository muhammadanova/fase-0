function digitPerkalianMinimum(angka) {
  var arr = []
  var result = 0
  var string = ''
  var pembagian = []
  for(var i = 0; i <= angka; i++){
    pembagian = angka / i
    string = String(pembagian) + String(i)
    if(pembagian % 1 === 0){
      arr.push(string)
      if(result === 0){
        result = string.length
      }else if(result > string.length){
        result = string.length
      }
    }
  }
  return result
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2