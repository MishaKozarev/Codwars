// You are given an array. Complete the function that returns the number of ALL elements within an array, including any nested arrays.

// Examples
// []                   -->  0
// [1, 2, 3]            -->  3
// ["x", "y", ["z"]]    -->  4
// [1, 2, [3, 4, [5]]]  -->  7
// The input will always be an array.


function deepCount(a){
    let aJSON = JSON.stringify(a)
    let arrFromJSON = [...aJSON]
    let contBracket = 0
    for(let i = 0; i < arrFromJSON.length; i++){
        if(arrFromJSON[i] === ']'){
            contBracket ++
        }
    }
    let resArr = contBracket - 1

    let aFlat = a.flat(Infinity)
    let resFlat = aFlat.length

    let result = resArr + resFlat
    return result
//     console.log(result)
}

