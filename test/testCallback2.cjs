const { getList } = require("../callback2.cjs");
const list = require('./lists_1.json');

getList(list, "mcu453ed", (list) => {
    console.log(list);
})