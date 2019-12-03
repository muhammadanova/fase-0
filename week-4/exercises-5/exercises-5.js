function ubahHuruf(kata) {
  var abjad = 'abcdefghijklmnopqrstuvwxyz'
  var gantiKata = ''
  for(var i = 0; i < kata.length; i++){
    for(var j = 0; j < abjad.length; j++){
      // console.log(kata[i], abjad[j])
      if(kata[i] === abjad[j]){
        gantiKata += abjad[j+1]
      }
    }
  }
  return gantiKata
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu