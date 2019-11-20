// Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

function xo(str){
  var hasil = ''
  var tampungx = ''
  var tampungo = ''
  //Ketika ada data pada paramater bukan x dan o akan di tampung di notfound
  var notfound = ''
  for(var i = 0; i < str.length; i++){
    if(str[i] == 'x'){
      tampungx += i
    }else if(str[i] == 'o'){
      tampungo += i
    }else{
      notfound = "Tidak mengenali huruf"
    }
  }
  if(tampungx.length === tampungo.length && notfound == ''){ //Kondisi pertama 
    return hasil = true
  }else if(tampungx.length !== tampungo.length && notfound == ''){
    return hasil = false
  }else{
    return notfound
  }
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
console.log(xo('xoxoxxi')); // notfound keluar
