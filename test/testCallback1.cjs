const { getBoard } = require("./../callback1.cjs")
const boards = require('./boards_2.json');

getBoard(boards, "mcu453ed", (board) => {
    console.log(board);
})