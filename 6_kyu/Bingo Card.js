// After yet another dispute on their game the Bingo Association decides to change course and automate the game.

// Can you help the association by writing a method to create a random Bingo card?

// Bingo Cards
// A Bingo card contains 24 unique and random numbers according to this scheme:

// 5 numbers from the B column in the range 1 to 15
// 5 numbers from the I column in the range 16 to 30
// 4 numbers from the N column in the range 31 to 45
// 5 numbers from the G column in the range 46 to 60
// 5 numbers from the O column in the range 61 to 75
// Task
// Write the function get_card()/getCard(). The card must be returned as an array of Bingo style numbers:

// [ 'B14', 'B12', 'B5', 'B6', 'B3', 'I28', 'I27', ... ]
// The numbers must be in the order of their column: B, I, N, G, O. Within the columns the order of the numbers is random.

function getCard() {
    let arr = [];
    for(let i = 0; i < 5; i++){
      let resultB = `B${getResult(1,15)}`;
      if(!arr.includes(resultB)){
        arr.push(resultB) ;
      }else{
        {i--};
      }
    }
    for(let i = 0; i < 5; i++){
      let resultI = `I${getResult(16,30)}`;
      if(!arr.includes(resultI)){
        arr.push(resultI) ;
      }else{
        {i--};
      }
    }
    for(let i = 0; i < 4; i++){
      let resultN = `N${getResult(31,45)}`;
      if(!arr.includes(resultN)){
        arr.push(resultN) ;
      }else{
        {i--};
      }
    }
    for(let i = 0; i < 5; i++){
      let resultG = `G${getResult(46,60)}`;
      if(!arr.includes(resultG)){
        arr.push(resultG) ;
      }else{
        {i--};
      }
    }
    for(let i = 0; i < 5; i++){
      let resultO = `O${getResult(61,75)}`;
      if(!arr.includes(resultO)){
        arr.push(resultO) ;
      }else{
        {i--};
      }
    }
    return arr;
  }
  function getResult(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }