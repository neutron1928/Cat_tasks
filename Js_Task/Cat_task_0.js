//------------------------------------------[Task 1]----------------------------------//

// Function To Sum The Number Between To Tow Numbers 

let sumInt = (first,end) => (((end * (end + 1)) / 2)) - ((((first) * (first + 1)) / 2)) + first ;

// // Test Cases
// console.log(sumInt(1,3)) // 6
// console.log(sumInt(2,5)) // 14
// console.log(sumInt(1,10)) // 55
// console.log(sumInt(4,10)) // 49


//-------------------------------------------[Task 2]----------------------------------//

// Function Return Object With The number of occurrence of each character in a given string

/**
 * @param {string} str 
*/
function occurrenceChar(str){
    let occObj = {} 
    let placeHolder =[...new Set(str.split(''))].map((e) => occObj[e] = str.match(new RegExp(`${e}`,'g')).length)
    return occObj ;
}   

// // Test Cases
// console.log(occurrenceChar('Hello'))
// console.log(occurrenceChar('abbcccdddd'))
// console.log(occurrenceChar('CAT'))

