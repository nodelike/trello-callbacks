/* 
	Problem 4: Write a function that will use the previously written functions to get the following information. You do not need to pass control back to the code that called it.

    Get information from the Thanos boards
    Get all the lists for the Thanos board
    Get all cards for the Mind list simultaneously
*/

const { getBoard } = require("./callback1.cjs")
const { getList } = require("./callback2.cjs")
const { getCards } = require("./callback3.cjs")


function getThanosBoardInfo(boards, lists, cards){
    try {
        getBoard(boards, "mcu453ed", (board) => {
            console.log(board);
            getList(lists, board.id, (list) => {
                console.log(list);
                const mindList = list.find(list => {
                    return list.name == "Mind";
                })
                getCards(cards, mindList.id, (card) => {
                    console.log(card);
                })
            })
        })
    } catch (error) {
        console.log(`Error getting mind stone info of thanos board. ${error}`);
    }
}

module.exports = { getThanosBoardInfo }