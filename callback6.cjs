/* 
	Problem 6: Write a function that will use the previously written functions to get the following information. You do not need to pass control back to the code that called it.

    Get information from the Thanos boards
    Get all the lists for the Thanos board
    Get all cards for all lists simultaneously
*/

const { getBoard } = require("./callback1.cjs")
const { getList } = require("./callback2.cjs")
const { getCards } = require("./callback3.cjs")


function getThanosBoardInfo(boards, lists, cards){
    try {
        getBoard(boards, "mcu453ed", (board) => {
            console.log(board);
            getList(lists, board.id, (thanosList) => {
                console.log(thanosList);
                thanosList.forEach((list) => {
                    getCards(cards, list.id, (card) => {
                        console.log(card);
                    })
                })
            })
        })
    } catch (error) {
        console.log(`Error getting all the stone info of thanos board. ${error}`);
    }
}

module.exports = { getThanosBoardInfo }