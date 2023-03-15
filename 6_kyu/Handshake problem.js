// Johnny is a farmer and he annually holds a beet farmers convention "Drop the beet".

// Every year he takes photos of farmers handshaking. Johnny knows that no two farmers handshake more than once. He also knows that some of the possible handshake combinations may not happen.

// However, Johnny would like to know the minimal amount of people that participated this year just by counting all the handshakes.

// Help Johnny by writing a function, that takes the amount of handshakes and returns the minimal amount of people needed to perform these handshakes (a pair of farmers handshake only once).

//handshakes => h
//resalt => n
//discriminant => D
//h = n *(n - 1) / 2
//n**2 - n - 2 * h = 0
//D = 1 + 8 * h


function getParticipants(handshakes){
    if(handshakes === 0){
      return 0
    }else{
    let result = (1 + Math.sqrt(1 + 8 * handshakes))/2
    return Math.ceil(result)
    }
  }

