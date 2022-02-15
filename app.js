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

function twoSum(nums, target) {
  const indices = {};

  nums.forEach((item, index) => {
      indices[item] = index
      console.log(indices)
  });

  for (let index = 0; index < nums.length; index++) {
      const complement = target - nums[index];

      if (indices[complement] !== undefined && indices[complement] !== index) {
          return [index, indices[complement]]
      }
  }
};

console.log(twoSum([3,4, 8, 10], 18))

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

function formatWithPadding(int, char, length) {
  var result = int.toFixed(0);
  while (result.length < length) {
    result = char + result;
  }
  return result;
}