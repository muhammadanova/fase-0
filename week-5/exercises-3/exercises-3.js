function makanTerusRekursif(waktu) {
  // yang mau dihitung berapa kali ngambil makanan dan ketika ambil makanan kurangin waktu -15
  var berapaKali = 0
  if(waktu === 0){
    return berapaKali
  }else if(waktu > 0 && waktu < 16){
    return 1
  }else{
    berapaKali += 1
    return berapaKali + makanTerusRekursif(waktu-15)
  }
}

// TEST CASES
console.log(makanTerusRekursif(66)); // 5
console.log(makanTerusRekursif(100)); // 7
console.log(makanTerusRekursif(90)); // 6
console.log(makanTerusRekursif(10)); // 1
console.log(makanTerusRekursif(0)); // 0