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

console.log(riffleShuffle(unshuffledCardDeck))