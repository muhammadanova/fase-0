const game = 'Roket Terbang'
// bebas memilih nama
var nama = 'Danu'
var peran = 'Tendang'

// action dari peran
var action1 = 'kamu dapat menyerang dengan senjatamu!'
var action2 = 'kamu akan membantu temanmu yang terluka.'
var action3 = 'ciptakan keajaiban yang membantu kemenanganmu!'
var action4 = 'silahkan isi peran (Ksatria/Tabib/Penyihir)'

// pesan selamat datang
var welcome = `Selamat datang di Dunia ${game}, ${nama}`

//kondisi
if(nama !== '' && peran === ''){
  console.log(`Halo ${nama}, Pilih peranmu untuk memulai game!`)
}else if(nama === 'Nina' && peran === 'Ksatria'){
  console.log(welcome)
  // Penggunaan string + variabel
  console.log('Halo ' + peran + ' ' + nama + ', ' + action1)
  // Penggunaan backticks
  // console.log(`Halo ${peran} ${nama}, ${action1}`)
}else if(nama === 'Danu' && peran === 'Tabib'){
  console.log(welcome)
  console.log('Halo ' + peran + ' ' + nama + ', ' + action2)
}else if(nama === 'Zero' && peran === 'Penyihir'){
  console.log(welcome)
  console.log('Halo ' + peran + ' ' + nama + ', ' + action3)
}else if(nama !== '' && peran !== ''){
  console.log(welcome)
  console.log('Halo' + ' ' + nama + ', ' + action4 )
}else{
  console.log('Nama harus diisi')
}

// coba kondisi dengan binding nama peran yang dikhususkan
// if(nama !== '' && peran === ''){
//   console.log(`Halo ${nama}, Pilih peranmu untuk memulai game!`)
// }else if(nama !== '' && peran !== ''){
//   console.log(`${welcome}`)
//   console.log(`Halo ${peran} ${nama}, ${peran === 'Ksatria' ? action1 : peran === 'Tabib' ? action2 : peran === 'Penyihir' ? action3 : action4}`)
// }else{
//   console.log('Nama harus diisi')
// }