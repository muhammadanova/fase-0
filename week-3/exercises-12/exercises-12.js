function tentukanDeretGeometri(arr) {
  var result = true
  var selisihHasilBagi = arr[1] / arr[0]
  // console.log(selisihHasilBagi)
  for(var i = 0; i < arr.length-1; i++){
    if(selisihHasilBagi !== arr[i+1] /  arr[i]){
      result = false
    }
  }
  return result
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false