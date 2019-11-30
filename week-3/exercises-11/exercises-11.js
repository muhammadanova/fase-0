function tentukanDeretAritmatika(arr) {
  var result = true
  var selisihAngka = arr[1] - arr[0]
  // console.log(selisihAngka)
  for(var i = 0; i < arr.length-1; i++){
    // console.log(arr[i+1] - arr[i])
    if(selisihAngka !== (arr[i+1] - arr[i])){
      result = false
    }
  }
  return result
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false