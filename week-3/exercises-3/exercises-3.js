// Buatlah sebuah fungsi dengan nama dataHandling dengan sebuah parameter untuk menerima argumen. Argumen yang akan diterima adalah sebuah array yang berisi beberapa array sejumlah n. Contoh input dapat dilihat dibawah:

var input = [
  ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
  ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
  ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
  ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

// for(var i=0; i<input.length; i++){
//   for(var j=0; j<input[i].length; j++){
//     console.log(input[i][j])
//   }
// }

function dataHandling(input){
  var newArray = new Array()
  for(var i=0; i<input.length; i++){
    var newArr = {
      'Nomor ID: ' : input[i][0], 
      'Nama Lengkap: ' : input[i][1],
      'TTL: ' : input[i][2] + ' ' + input[i][3],
      'Hobi: ' : input[i][4]
    }
    newArray.push(newArr)
  }
  return newArray
}

console.log(dataHandling(input))