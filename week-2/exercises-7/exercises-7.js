// 1. Menyusun Barisan Bintang
var rows1 = 5
for(var i = 0; i < rows1; i++){
  var tampung = ''
  tampung += '*'
  console.log(tampung)
}

// 2. Menyusun Barisan Bintang Dengan Nested Looping
var rows2 = 5
for(var i = 0; i < rows2; i++){
  var tampung = ''
  for(var j = 0; j < rows2; j++){
    tampung += '*'
  }
  console.log(tampung)
}

// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
var rows3 = 5
for(var i = 0; i < rows3; i++){
  var tampung = ''
  for(var j = 0; j < i+1; j++){
    tampung += '*'
  }
  console.log(tampung)
}