const { getCards } = require("../callback3.cjs");
const cards = require('./cards_2.json');

getCards(cards, "qwsa221", (card) => {
    console.log(card);
})