// Buatlah sebuah function dengan nama dataHandling2 yang akan menerima input array seperti di atas.
// Gunakan fungsi splice untuk memodifikasi variabel tersebut agar menjadi seperti array dibawah. Lalu console.log array yang baru seperti di bawah.

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input){
  input.splice(1, 1, "Roman Alamsyah Elsharawi")
  // console.log(input)
  input.splice(2, 1, "Provinsi Bandar Lampung")
  // console.log(input)
  input.splice(4, 1, "Pria", "SMA Internasional Metro")
  // console.log(input)

  var split = input[3].split("/")
  var bulan = split[1]

  switch (bulan) {
    case "01" :
      bulan = 'Januari'
      break
    case "02" :
      bulan = 'Februari'
      break
    case "03" :
      bulan = 'Maret'
      break
    case "04" :
      bulan = 'April'
      break
    case "05" :
      bulan = 'Mei'
      break
    case "06" : 
      bulan = 'Juni'
      break
    case "07" :
      bulan = 'Juli'
      break
    case "08" :
      bulan = 'Agustus'
      break
    case "09" :
      bulan = 'September'
      break
    case "10" :
      bulan = 'Oktober'
      break
    case "11" :
      bulan = 'November'
      break
    case "12" :
      bulan = 'Desember'
    default:
      console.log('Tidak ada nama bulan untuk angka itu');
      break;
  }
  // Console data yang diinginkan ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
  // console.log(input)
  // Console data bulan yang diinginkan Mei
  // console.log(bulan)

  var date = split.sort((a, b) => b - a)
  // Console date yang diinginkan ["1989", "21", "05"]
  // console.log(date)

  var oldSplit = input[3].split("/")
  var newDate = oldSplit.join("-")
  // Console newdate yang diinginkan 21-05-1989
  // console.log(newDate)

  var sliceName = input.slice(1,2)
  var name = sliceName[0]
  var newName = name.slice(0, 15)
  // Console nama yang diinginkan Roman Alamsyah
  // console.log(newName)

  return input + "\n" + bulan + "\n" + date + "\n" + newDate + "\n" + newName
}

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */

console.log(dataHandling2(input))
