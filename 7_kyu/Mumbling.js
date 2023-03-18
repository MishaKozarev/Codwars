// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

function accum(s) {
    const str = s.toLowerCase();
    let result = '';
      for (let i = 0; i < str.length; i ++) {
      const symbol = str[i];
      for (let j = 0; j <= i; j ++) {
        if (j === 0){
          if (i !== 0){
            result = result + '-'
          }
          result = result + symbol.toUpperCase();
        }else{
          result = result + symbol;
        }
      }
    }
    return result
  }