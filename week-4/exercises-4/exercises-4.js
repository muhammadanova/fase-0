function cariModus(arr) {
  var result = []
  var notFound = false
  for(var i = 0; i < arr.length; i++){
    for(var j = i+1; j < arr.length; j++){
      // console.log(arr[i], arr[j])
      if(arr[i] === arr[j]){
        notFound = true
        result.push(arr[i])
      }else{
        notFound = false
      }
    }
  }
  // console.log(result.length)
  if(result.length === 0 || notFound){
    return -1
  }else{
    return result[0]
  }
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1