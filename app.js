// Perfect riffle shuffle

// An ‘in shuffle’ is a perfect riffle shuffle on a standard deck of 52 playing cards - that just means a shuffle by splitting the deck in half, then interleaving cards, starting with the top half. Can you write a quick program to solve the following?

// What is the position of the first card after the 7th shuffle?
// How many times must you perform the shuffle so that the top card becomes the bottom card?
// When do the first and last cards in the deck touch?
// Finally, about how much time did you spend on this problem?

function riffleShuffle(cardDeck) {
    let bottomHalf = cardDeck.slice(0, 26)
    let topHalf = cardDeck.slice(26)
    
    let newDeck = []
  
    for (let i = 0; i < bottomHalf.length; i++) {
      newDeck.push(topHalf[i])
      newDeck.push(bottomHalf[i])
      
    }
    return newDeck
  }
  
let unshuffledCardDeck = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52]

// console.log(riffleShuffle(unshuffledCardDeck))


// TwoSum LeetCode

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

function intTarget(arr, target) {
  let output = []
  
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++){
      if (arr[i] + arr[j] == target) {
        return output = [i, j]
      }
    };
    
  }
}

// console.log(intTarget([2,5,5,11,15], 10))


// - Write a function called formatWithPadding that accepts three arguments:
//   - A numeric argument (an integer) representing the number to format.
//   - A string argument (a single character) representing the character used to "pad" the returned string to a minimum length.
//   - Another numeric argument (an integer) representing the length to "pad" the returned string to.
// - The function should return the integer as a string, "left padded" to the length of the 3rd arg using the character provided in the 2nd arg.
// - If the length of the integer converted to a string is equal or greater than the 3rd argument, no padding is needed - just return the integer as a string.

// Examples:

// formatWithPadding(123, '0', 5); //=> "00123"
// formatWithPadding(42, '*', 10); //=> "********42"
// formatWithPadding(1234, '*', 3); //=> "1234"

// function formatWithPadding(int, char, length) {
//   let result = int.toFixed(0)
//   if (result.length < length) {
//     result = char + result
//   }
//   return result
// }

// or you can use padStart(). Look it up on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart

function formatWithPadding(int, char, length) {
  return int.toFixed(0).padStart(length, char)
}

// console.log(formatWithPadding(123, "p", 190))

// FIGURE OUT HOW TO CALCULATE GOLF INDEX!

function totalFruit(array) {
  let map = new Map()
  let max = -1
  for(let start = 0, end = 0; end < array.length; end++) {
    let currElement = array[end]
    map.set(currElement, map.get(currElement)+1 || 1)
    while (map.size > 2) {
      let char = array[start]
      let charCount = map.get(char)
      if(charCount -1 === 0 )map.delete(char)
      else map.set(char, charCount-1)
      start++
    }
    if(map.size >= 1) max = Math.max(max, end +1 - start)
  }
  return max
}

// console.log(totalFruit([3,4,3,2,1,1,1,2,1,1,2]))

// let map = new Map() 
// let currElement = 3
// console.log(map.set(currElement, 1+1 || 1))

// console.log(Math.max(3, 0 +1 - 0))

// function practiceMap(arr) {
//   let map = new Map()

//   for (let i = 0; i < arr.length; i++) {
//     let
    
//   }
// }

// FormatWIthPadding
// Prompt:

// - Write a function called formatWithPadding that accepts three arguments:
// - A numeric argument (an integer) representing the number to format.
// - A string argument (a single character) representing the character used to "pad" the returned string to a minimum length.
// - Another numeric argument (an integer) representing the length to "pad" the returned string to.
// - The function should return the integer as a string, "left padded" to the length of the 3rd arg using the character provided in the 2nd arg.
// - If the length of the integer converted to a string is equal or greater than the 3rd argument, no padding is needed - just return the integer as a string.

// Examples:

// formatWithPadding(123, '0', 5); //=> "00123"
// formatWithPadding(42, '*', 10); //=> "********42"
// formatWithPadding(1234, '*', 3); //=> "1234"

function formatWithPadding(int, str, length) {
  let output = int.toString()
  output = output.padStart(length, str)
  return output
}

function formatWithPadding2(int, char, length) {
  return int.toFixed(0).padStart(length, char);
}

