// vowelOne
// Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

// All non-vowels including non alpha characters (spaces,commas etc.) should be included.

// Examples:

// vowelOne( "abceios" ) // "1001110"

// vowelOne( "aeiou, abc" ) // "1111100100"

function vowelOne(s){
    let result = '';
    for(let i in s){
      if((s[i] === 'a') || (s[i] === 'e') || (s[i] === 'i') || (s[i] === 'o') || (s[i] === 'u') || (s[i] === 'A') || (s[i] === 'E') || (s[i] === 'I') || (s[i] === 'O') || (s[i] === 'U')){
        result +=1;
      }else{
        result += 0;
      }
    }
    return result;
  }