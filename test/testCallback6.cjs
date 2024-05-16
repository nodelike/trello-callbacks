const { getThanosBoardInfo } = require("../callback6.cjs");

const boards = require('./boards_2.json');
const lists = require('./lists_1.json');
const cards = require('./cards_2.json');

getThanosBoardInfo(boards, lists, cards);