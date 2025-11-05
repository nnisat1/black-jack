const suits = ["♥", "♦", "♣", "♠"];
const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

deck = []
    for (suit of suits) {
        for (rank of ranks){
            deck.push({suits,ranks})
        }
    }

console.log(deck)