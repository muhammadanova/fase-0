// 1. Melakukan Looping Menggunakan While
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.

// LOOPING PERTAMA
var i = 2
var target_while1 = 20
while(i <= target_while1){
  console.log(i + ' - I love coding')
  i += 2
}

// LOOPING KEDUA
var j = 2
var target_while2 = 20
while(target_while2 >= j){
  console.log(target_while2 + ' - I will become fullstack developer')
  target_while2 -= 2
}


// 2. Melakukan Looping Menggunakan For
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for. Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.


// LOOPING PERTAMA
var target_for_1 = 20
for(var k = 1; k <= target_for_1; k++){
  console.log(k + ' - I love coding')
}

// LOOPING KEDUA
var target_for_2 = 20
for(var l = target_for_2; l >= 1; l--){
  console.log(l + ' - I will become fullstack developer')
}

// 3. Angka Ganjil dan Genap
// PERTAMA. Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// KEDUA.   Di dalam perulangan, periksa setiap angka counter:
//            - Apabila angka counter adalah angka genap, tuliskan GENAP
//            - Apabila angka counter adalah angka ganjil, tuliskan GANJIL
// KETIGA.  Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// KEEMPAT. Pada 3 perulangan baru ini periksa setiap angka counter:
//            - Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
//            - Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan                 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
//            - "3 kelipatan 3" dan seterusnya.

var target3 = 100

// CONTOH GANJIL GENAP
for(var i = 0; i <= target3; i++){
  if(i%2 == 1){
    console.log('GANJIL')
  }else{
    console.log('GENAP')
  }
}

// COUNTER 2
for(var j = 1; j <= target3; j+=2){
  if(j%3 == 0){
    console.log(j + ' KELIPATAN 3')
  }else{
    console.log('""')
  }
}

// COUNTER 5
for(var k = 1; k <= target3; k+=5){
  if(k%6 == 0){
    console.log(k + ' KELIPATAN 6')
  }else{
    console.log('""')
  }
}

// COUNTER 9
for(var l = 1; l <= target3; l+=9){
  if(l%10 == 0){
    console.log(l + ' KELIPATAN 10')
  }else{
    console.log('""')
  }
}