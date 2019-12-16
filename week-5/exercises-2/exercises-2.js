function changeVocals (str) {
  var change = ''
  for(var i = 0; i < str.length; i++){
    if(str[i] === 'a'){
      change += 'b'
    }else if(str[i] === 'i'){
      change += 'j'
    }else if(str[i] === 'u'){
      change += 'v'
    }else if(str[i] === 'e'){
      change += 'f'
    }else if(str[i] === 'o'){
      change += 'p'
    }else if(str[i] === 'A'){
      change += 'B'
    }else if(str[i] === 'I'){
      change += 'J'
    }else if(str[i] === 'U'){
      change += 'V'
    }else if(str[i] === 'E'){
      change += 'F'
    }else if(str[i] === 'O'){
      change += 'P'
    }else{
      change += str[i]
    }
  }
  return change
}

function reverseWord (str) {
  var nameChangeVocal = changeVocals(str)
  var reverse = ''
  for(var i = nameChangeVocal.length-1; i >= 0; i--){
    reverse += nameChangeVocal[i]
  }
  return reverse
}

function setLowerUpperCase (str) {
  var reverseName = reverseWord(str)
  var nameLowerUpper = ''
  for(var i = 0; i < reverseName.length; i++){
    if(reverseName[i] !== reverseName[i].toLowerCase()){
      nameLowerUpper += reverseName[i].toLowerCase()
    }else{
      nameLowerUpper += reverseName[i].toUpperCase()
    }
  }
  return nameLowerUpper
}

function removeSpaces (str) {
  var nameLowUp = setLowerUpperCase(str)
  var removeSpaceName = ''
  for(var i = 0; i < nameLowUp.length; i++){
    if(nameLowUp[i] !== ' '){
      removeSpaceName += nameLowUp[i]
    }
  }
  return removeSpaceName
}

function passwordGenerator (name) {
  if(name.length < 5){
    return 'Minimal karakter yang diinputkan adalah 5 karakter'
  }else{
    return removeSpaces(name)
  }
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'