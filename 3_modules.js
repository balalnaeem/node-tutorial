// CommonJS, every file is module by default
// Modules - Encapsulated code (only share minimum)

const names = require('./4_names');
const sayHi = require('./5_utils');
const data = require('./6_alt_flavor');
require('./7_mind_grenade.js');

console.log(data);

sayHi('susan');
sayHi(names.john);
sayHi(names.peter)