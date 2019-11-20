// Diberikan sebuah function konversiMenit(menit) yang menerima satu parameter berupa angka yang merupakan ukuran waktu dalam menit. Function akan me-return string waktu dalam format jam:menit berdasarkan menit tersebut. Contoh, jika menit adalah 63, maka function akan me-return "1:03".

function konversiMenit(menit){
  var waktu = ''
  //Math floor untuk bulatkan angka yang koma
  var minutes = Math.floor(menit / 60)
  //Sia bagi
  var second = menit % 60
  //Kondisi penambahan 0 jika length dari second 1
  if(new String(second).length == 1){
    second = "0"+second
  }
  //Define hasil dari konversi
  waktu = minutes + ":" + second
  //Mengembalikan nilai dari waktu
  return waktu
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00