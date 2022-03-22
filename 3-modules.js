// CommonJs, every file in node is module (by default)
// Modules - Encapsulated Code (Only share minimum (What we want)) 

const names = require('./4-names(First module)');
const sayhi = require("./5-utlis(Second module)");
const data = require('./6-alternative-way');
require("./7-mind-grenades");
console.log(names);

sayhi('Iyyan');

sayhi(names.Kabeer);