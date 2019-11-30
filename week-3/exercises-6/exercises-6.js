function angkaPalindrome(num) {
  var tampung = ''
  for(var i = num+1; i > 0; i--){
    num += 1
    var str = String(num)
    for(var j = str.length-1; j >= 0; j--){
      tampung += str[j]
    }
    if(tampung == str){
      return parseInt(tampung)
    }
    tampung = ''
  }
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
