/* 
	Problem 1: Write a function that will return a particular board's information based on the boardID that is passed from the given list of boards in boards.json and then pass control back to the code that called it by using a callback function.
*/

function getBoard(boards, boardId, callback) {
    try {
        setTimeout(() => {
            const board = boards.find(board => {
                return board.id == boardId
            });
            callback(board);
        }, 2000);
    } catch (error) {
        console.log(`Error getting boards by id. ${error}`);
    }
}

module.exports = { getBoard };