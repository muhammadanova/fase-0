function angkaPrima(angka) {
  if(angka == 1){ // Kalo angka 1 pasti bukan prima
    return false
  }else if(angka == 2){ // Kalo angka 2 pasti prima
    return true
  }else{
    var x = 2
    while(x < angka){
      if(angka % x == 0){
        return false
      }
      x++
    }
    return true 
  }
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false