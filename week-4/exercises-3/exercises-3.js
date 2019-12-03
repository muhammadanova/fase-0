function cariMedian(arr) {
  var leng = arr.length
  var index = 0
  if(leng % 2 !== 0){
    index = Math.floor(leng / 2)
    return arr[index]
  }else{
    index = Math.floor(leng / 2)
    var hasilTambah = 0
    hasilTambah = arr[index - 1] + arr[index]
    return hasilTambah / 2
  }
}

function sort(arr){
  for(var i = 0; i < arr.length; i++){
    for(var j = 0; j < arr.length; j++){
      if(arr[i] < arr[j]){
        var temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr

}

// TEST CASES
console.log(sort([1, 2, 3, 4, 5])); // SORTING DULU
console.log(cariMedian(sort([1, 2, 3, 4, 5]))); // 3
console.log(sort([1, 3, 4, 10, 12, 13])); // SORTING DULU
console.log(cariMedian(sort([1, 3, 4, 10, 12, 13]))); // 7
console.log(sort([3, 4, 7, 6, 10])); // SORTING DULU
console.log(cariMedian(sort([3, 4, 7, 6, 10]))); // 6
console.log(sort([1, 3, 3])); // SORTING DULU
console.log(cariMedian(sort([1, 3, 3]))); // 3
console.log(sort([7, 7, 8, 8])); // SORTING DULU
console.log(cariMedian(sort([7, 7, 8, 8]))); // 7.5