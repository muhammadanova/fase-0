function kaliTerusRekursif(angka) {
  var str = angka.toString();
  var arr = [];
  var num = Number(str[str.length-1]);

  for(var i=0; i<str.length; i++) {
    arr.push(+str.charAt(i));
  } 

  if(arr.length === 1) {
    return Number(arr);
  }else{
    var angkaBaru = arr.slice(0, arr.length-1);
    var angkaToString = angkaBaru.toString();
    var angkaBaruString = '';
    for(var j=0; j<angkaToString.length; j++) {
      if(angkaToString[j] === ',') {
      }else{
        angkaBaruString = angkaBaruString + angkaToString[j];
      }
    }

    var hasil = num * kaliTerusRekursif(angkaBaruString);
    if(hasil >= 10) {
      return kaliTerusRekursif(hasil);
    }else{
      return hasil;
    }
  }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6