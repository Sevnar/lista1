const fs = require('fs');

const quick = require('../algorithms/quicksort');

let numbers = fs.readFileSync(`${__dirname}/../data/rand.dat`).toString().split("\n");

// asce
let asce = quick(numbers, 0, numbers.length -1);
let towriteA = '';
for(let i = 0; i < asce.length; i++) {
    towriteA += asce[i] + "\n";
}
fs.writeFileSync('asce.dat', towriteA);

// desc
let towriteB = '';
let desc = asce.reverse();
for(let i = 0; i < desc.length; i++) {
    towriteB += desc[i] + "\n";
}
fs.writeFileSync('desc.dat', towriteB);
