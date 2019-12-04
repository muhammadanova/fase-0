function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  if(arrPenumpang.length === 0){
    return []
  }else{
    var data = []
    for(var i = 0; i < arrPenumpang.length; i++){
      var history = {}
      history.penumpang = arrPenumpang[i][0]
      history.naikDari = arrPenumpang[i][1]
      history.tujuan = arrPenumpang[i][2]
      var indexStart = 0 
      var indexFinish = 0
      for(var j = 0; j < rute.length; j++){
        // console.log(arrPenumpang[i][1], rute[j])
        if(arrPenumpang[i][1] == rute[j]){
          indexStart = j
        }else if(arrPenumpang[i][2] == rute[j]){
          indexFinish = j
        }
      }
      history.bayar = (indexFinish - indexStart) * 2000
      data.push(history)
    }
    return data
  }
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]