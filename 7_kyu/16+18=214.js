// For this kata you will have to forget how to add two numbers.

// It can be best explained using the following meme:

// Dayane Rivas adding up a sum while competing in the Guatemalan television show "Combate" in May 2016

// In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)

// You may assume both integers are positive integers.

// Examples
//    1 6
//  + 1 8
//  = 2 14

const add = (num1, num2) => {
    num1 = num1.toString().split('').reverse()
    num2 = num2.toString().split('').reverse()
    if(num1.length < num2.length){
      [num1, num2] = [num2, num1]
      }
    let str = '';
    for(let i = 0; i < num1.length; i++){
    let intNum1 = parseInt(num1[i] || 0);
    let intNum2 = parseInt(num2[i] || 0);
      str = (intNum1 + intNum2).toString() + str
    }
    return parseInt(str)
  }