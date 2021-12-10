function createDeck() {
  let suits = ["♥", "♣", "♦", "♠"];
  let ranks = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];
  let deck = [];
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < ranks.length; j++) {
      deck.push(ranks[j] + suits[i]);
    }
  }
  return deck;
} // crates any full deck
function shuffle(deck) {
  for (let i = 0; i < 52; i++) {
    let pickedCard = deck[i];
    let randomNumber = Math.floor(Math.random() * 52);
    deck[i] = deck[randomNumber];
    deck[randomNumber] = pickedCard;
  }
  return deck;
} // shuffles any deck

let newDeck = createDeck(); // makes new deck variable

shuffle(newDeck); //shuffle specific deck

let split = Math.ceil(newDeck.length / 2); // split deck in 2
let botDeck = newDeck.slice(0, split); // deck 1
let playerDeck = newDeck.slice(-split); // deck 2


console.log(newDeck +" " + newDeck.length)
console.log(botDeck +" " + botDeck.length)
console.log(playerDeck +" " + playerDeck.length)

function singleCard(deck, index) {
    card = deck[index];
    deck.pop();
    index--;
    return card
}



while (botDeck.length !== 0 || playerDeck.length !== 0) {
    let playerCard =singleCard(playerDeck, 26)
    let botCard = singleCard(botDeck, 26)
    switch (botCard){
        case "J": 

    }
}
