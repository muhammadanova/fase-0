function checkAB(num) {
  var result = false
  for(var i = 0; i < num.length; i++){
    if(num[i] === 'a'){
      // console.log(i)
      for(var j = i; j < num.length; j++){
        // console.log(num[j])
        if(num[j] === 'b'){
          // console.log(i, j, num[i], num[j])
          if(i <= j){
            result = true
          }else{
            result = false
          }
        }
      }
    }
  }
  return result
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false