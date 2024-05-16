/* 
	Problem 3: Write a function that will return all cards that belong to a particular list based on the listID that is passed to it from the given data in cards.json. Then pass control back to the code that called it by using a callback function.
*/

function getCards(cards, listID, callback){
    try {
        setTimeout(() => {
            const list = cards[listID]
            if(list){
                callback(list);
            }
        }, 2000)
    } catch (error) {
        console.log(`Error getting cards by list id. ${error}`);
    }
   
}

module.exports = { getCards };