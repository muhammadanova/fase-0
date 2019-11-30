function hitungJumlahKata(kalimat) {
  // INI PAKAI SPLIT
  // var kata = kalimat.split(" ")
  // return kata.length

  // INI PAKAI FOR LOOP ATAU SPLIT MANUAL
  var arr = []
  var temp = ''
  for(var i = 0; i <= kalimat.length; i++){
    if(kalimat[i] !== ' '){
      temp += kalimat[i]
      if(i == kalimat.length-1){
        arr.push(temp)
      }
    }else{
      arr.push(temp)
      temp = ''
    }
  }
  console.log(arr)
  return arr.length
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5