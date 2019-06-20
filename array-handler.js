const Array = require('./array');

let array = new Array();

// push element
array.push('hai');
array.push('hello');
array.push('welcome to');
array.push('array functions');
array.push('!');
// pop element
array.pop();
// delete particular element
array.deleteAtIndex(1);
// shift items to left at particular index
array.shiftItems(0);
// get particular element
console.log(array.get(1));


console.log(array.data);