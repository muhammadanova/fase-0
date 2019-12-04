function shoppingTime(memberId, money) {
  var newObj = {}
  if(memberId === '' || (memberId === undefined && money === undefined)){
    return 'Mohon maaf, toko X hanya berlaku untuk member saja'
  }else if(money < 50000){
    return 'Mohon maaf, uang tidak cukup'
  }else{
    var barang = []
    var kembalian = money
    if(kembalian >= 1500000){
      barang.push('Sepatu brand Stacattu')
      kembalian -= 1500000
    }
    if(kembalian >= 500000){
      barang.push('Baju brand Zoro')
      kembalian -= 500000
    }
    if(kembalian >= 250000){
      barang.push('Baju brand H&N')
      kembalian -= 250000
    }
    if(kembalian >= 175000){
      barang.push('Sweater brand Uniklooh')
      kembalian -= 175000
    }
    if(kembalian >= 50000){
      barang.push('Casing Handphone')
      kembalian -= 50000
    }
    newObj.memberId = memberId
    newObj.money = money
    newObj.listPurchased = barang
    newObj.changeMoney = kembalian
  }
  return newObj
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja