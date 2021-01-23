const fs = require('fs');

const runAlgo = require('./algorithms/bubblesort');

let numbers = fs.readFileSync(`${__dirname}/data/asce.dat`).toString().split("\n").map(el => Number(el));

let num10k = numbers.slice(0, 10000);
let num20k = numbers.slice(0, 20000);
let num30k = numbers.slice(0, 30000);
let num100k = numbers.slice(0, 100000);
let num200k = numbers.slice(0, 200000);
let num300k = numbers.slice(0, 300000);

esquentarMotor(num10k, runAlgo);
for (let i = 0; i < 5; i++) {
    console.log(`run ${i + 1}`)
    calcTime(num10k, runAlgo);
    calcTime(num20k, runAlgo);
    calcTime(num30k, runAlgo);
    calcTime(num100k, runAlgo);
    calcTime(num200k, runAlgo);
    calcTime(num300k, runAlgo);
    calcTime(numbers, runAlgo);
}

function calcTime(numbers, algo) {
    let hrstart = process.hrtime();
    algo(numbers);
    let hrend = process.hrtime(hrstart);
    console.log(hrend[0] * 1000 + hrend[1] / 1000000);
}

function esquentarMotor(numbers, algo) {
    for (let i = 0; i < 5; i++)
        algo(numbers);
}