/* 
	Problem 2: Write a function that will return all lists that belong to a board based on the boardID that is passed to it from the given data in lists.json. Then pass control back to the code that called it by using a callback function.
*/

function getList(lists, boardId, callback){
    try {
        setTimeout(() => {
            const list = lists[boardId]
            callback(list);
        }, 2000)
    } catch (error) {
        console.log(`Error getting list by board id. ${error}`);
    }
}

module.exports = { getList };