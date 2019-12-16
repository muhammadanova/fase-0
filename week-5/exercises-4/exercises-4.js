function totalDigitRekursif(angka) {
  var str = String(angka)
  // console.log(str.substring(0, 1))
  if(angka === Number(str.slice(-1))){
    // console.log(str.slice(-1))
    return Number(str.slice(-1))
  }else{
    // console.log(Number(str.slice(1)))
    return Number(str.substring(0, 1)) + totalDigitRekursif(Number(str.substring(1)))
  }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5