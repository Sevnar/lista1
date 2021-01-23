const fs = require('fs');

const bubblesort    = require('./algorithms/bubblesort');
const insertionsort = require('./algorithms/insertionsort');
const mergesort     = require('./algorithms/mergesort');
const quicksort     = require('./algorithms/quicksort');
const seletionsort  = require('./algorithms/seletionsort');

let asce = fs.readFileSync(`${__dirname}/data/asce.dat`).toString().split("\n").map(el => Number(el));
let rand = fs.readFileSync(`${__dirname}/data/rand.dat`).toString().split("\n").map(el => Number(el));
let desc = fs.readFileSync(`${__dirname}/data/desc.dat`).toString().split("\n").map(el => Number(el));

let asce10k  = asce.slice(0,10000);
let asce20k  = asce.slice(0,20000);
let asce30k  = asce.slice(0,30000);
let asce100k = asce.slice(0,100000);
let asce200k = asce.slice(0,200000);
let asce300k = asce.slice(0,300000);

let rand10k  = rand.slice(0,10000);
let rand20k  = rand.slice(0,20000);
let rand30k  = rand.slice(0,30000);
let rand100k = rand.slice(0,100000);
let rand200k = rand.slice(0,200000);
let rand300k = rand.slice(0,300000);

let desc10k  = desc.slice(0,10000);
let desc20k  = desc.slice(0,20000);
let desc30k  = desc.slice(0,30000);
let desc100k = desc.slice(0,100000);
let desc200k = desc.slice(0,200000);
let desc300k = desc.slice(0,300000);

let size1m   = rand.length;
let size10k  = rand.length;
let size20k  = rand.length;
let size30k  = rand.length;
let size100k = rand.length;
let size200k = rand.length;
let size300k = rand.length;

// ===== CALLS ======
console.log("=====================")
console.log("===== 10K CALLS =====")
console.log("=====================")
console.log("== ASCE ")
console.time("Bubbl_S"); bubblesort(asce10k);                  console.timeEnd("Bubbl_S");
console.time("Inser_S"); insertionsort(asce10k);               console.timeEnd("Inser_S");
console.time("Merge_S"); mergesort(asce10k);                   console.timeEnd("Merge_S");
console.time("Selet_S"); seletionsort(asce10k);                console.timeEnd("Selet_S");
console.time("Quick_S"); quicksort(asce10k, 0, size10k.length); console.timeEnd("Quick_S");
console.log("=====================")
console.log("== RAND ")
console.time("Bubbl_S"); bubblesort(rand10k);                  console.timeEnd("Bubbl_S");
console.time("Inser_S"); insertionsort(rand10k);               console.timeEnd("Inser_S");
console.time("Merge_S"); mergesort(rand10k);                   console.timeEnd("Merge_S");
console.time("Selet_S"); seletionsort(rand10k);                console.timeEnd("Selet_S");
console.time("Quick_S"); quicksort(rand10k, 0, size10k.length); console.timeEnd("Quick_S");
console.log("=====================")
console.log("== DESC ")
console.time("Bubbl_S"); bubblesort(desc10k);                  console.timeEnd("Bubbl_S");
console.time("Inser_S"); insertionsort(desc10k);               console.timeEnd("Inser_S");
console.time("Merge_S"); mergesort(desc10k);                   console.timeEnd("Merge_S");
console.time("Selet_S"); seletionsort(desc10k);                console.timeEnd("Selet_S");
console.time("Quick_S"); quicksort(desc10k, 0, size10k.length); console.timeEnd("Quick_S");

console.log("=====================")
console.log("===== 20K CALLS =====")
console.log("=====================")
console.log("== ASCE ")
console.time("Bubbl_S"); bubblesort(asce20k);                  console.timeEnd("Bubbl_S");
console.time("Inser_S"); insertionsort(asce20k);               console.timeEnd("Inser_S");
console.time("Merge_S"); mergesort(asce20k);                   console.timeEnd("Merge_S");
console.time("Selet_S"); seletionsort(asce20k);                console.timeEnd("Selet_S");
console.time("Quick_S"); quicksort(asce20k, 0, size20k.length); console.timeEnd("Quick_S");
console.log("=====================")
console.log("== RAND ")
console.time("Bubbl_S"); bubblesort(rand20k);                  console.timeEnd("Bubbl_S");
console.time("Inser_S"); insertionsort(rand20k);               console.timeEnd("Inser_S");
console.time("Merge_S"); mergesort(rand20k);                   console.timeEnd("Merge_S");
console.time("Selet_S"); seletionsort(rand20k);                console.timeEnd("Selet_S");
console.time("Quick_S"); quicksort(rand20k, 0, size20k.length); console.timeEnd("Quick_S");
console.log("=====================")
console.log("== DESC ")
console.time("Bubbl_S"); bubblesort(desc20k);                  console.timeEnd("Bubbl_S");
console.time("Inser_S"); insertionsort(desc20k);               console.timeEnd("Inser_S");
console.time("Merge_S"); mergesort(desc20k);                   console.timeEnd("Merge_S");
console.time("Selet_S"); seletionsort(desc20k);                console.timeEnd("Selet_S");
console.time("Quick_S"); quicksort(desc20k, 0, size20k.length); console.timeEnd("Quick_S");

console.log("=====================")
console.log("===== 30K CALLS =====")
console.log("=====================")
console.log("== ASCE ")
console.time("Bubbl_S"); bubblesort(asce30k);                  console.timeEnd("Bubbl_S");
console.time("Inser_S"); insertionsort(asce30k);               console.timeEnd("Inser_S");
console.time("Merge_S"); mergesort(asce30k);                   console.timeEnd("Merge_S");
console.time("Selet_S"); seletionsort(asce30k);                console.timeEnd("Selet_S");
console.time("Quick_S"); quicksort(asce30k, 0, size30k.length); console.timeEnd("Quick_S");
console.log("=====================")
console.log("== RAND ")
console.time("Bubbl_S"); bubblesort(rand30k);                  console.timeEnd("Bubbl_S");
console.time("Inser_S"); insertionsort(rand30k);               console.timeEnd("Inser_S");
console.time("Merge_S"); mergesort(rand30k);                   console.timeEnd("Merge_S");
console.time("Selet_S"); seletionsort(rand30k);                console.timeEnd("Selet_S");
console.time("Quick_S"); quicksort(rand30k, 0, size30k.length); console.timeEnd("Quick_S");
console.log("=====================")
console.log("== DESC ")
console.time("Bubbl_S"); bubblesort(desc30k);                  console.timeEnd("Bubbl_S");
console.time("Inser_S"); insertionsort(desc30k);               console.timeEnd("Inser_S");
console.time("Merge_S"); mergesort(desc30k);                   console.timeEnd("Merge_S");
console.time("Selet_S"); seletionsort(desc30k);                console.timeEnd("Selet_S");
console.time("Quick_S"); quicksort(desc30k, 0, size30k.length); console.timeEnd("Quick_S");

console.log("=====================")
console.log("===== 100K CALLS =====")
console.log("=====================")
console.log("== ASCE ")
console.time("Bubbl_S"); bubblesort(asce100k);                  console.timeEnd("Bubbl_S");
console.time("Inser_S"); insertionsort(asce100k);               console.timeEnd("Inser_S");
console.time("Merge_S"); mergesort(asce100k);                   console.timeEnd("Merge_S");
console.time("Selet_S"); seletionsort(asce100k);                console.timeEnd("Selet_S");
console.time("Quick_S"); quicksort(asce100k, 0, size100k.length); console.timeEnd("Quick_S");
console.log("=====================")
console.log("== RAND ")
console.time("Bubbl_S"); bubblesort(rand100k);                  console.timeEnd("Bubbl_S");
console.time("Inser_S"); insertionsort(rand100k);               console.timeEnd("Inser_S");
console.time("Merge_S"); mergesort(rand100k);                   console.timeEnd("Merge_S");
console.time("Selet_S"); seletionsort(rand100k);                console.timeEnd("Selet_S");
console.time("Quick_S"); quicksort(rand100k, 0, size100k.length); console.timeEnd("Quick_S");
console.log("=====================")
console.log("== DESC ")
console.time("Bubbl_S"); bubblesort(desc100k);                  console.timeEnd("Bubbl_S");
console.time("Inser_S"); insertionsort(desc100k);               console.timeEnd("Inser_S");
console.time("Merge_S"); mergesort(desc100k);                   console.timeEnd("Merge_S");
console.time("Selet_S"); seletionsort(desc100k);                console.timeEnd("Selet_S");
console.time("Quick_S"); quicksort(desc100k, 0, size100k.length); console.timeEnd("Quick_S");

console.log("=====================")
console.log("===== 200K CALLS =====")
console.log("=====================")
console.log("== ASCE ")
console.time("Bubbl_S"); bubblesort(asce200k);                  console.timeEnd("Bubbl_S");
console.time("Inser_S"); insertionsort(asce200k);               console.timeEnd("Inser_S");
console.time("Merge_S"); mergesort(asce200k);                   console.timeEnd("Merge_S");
console.time("Selet_S"); seletionsort(asce200k);                console.timeEnd("Selet_S");
console.time("Quick_S"); quicksort(asce200k, 0, size200k.length); console.timeEnd("Quick_S");
console.log("=====================")
console.log("== RAND ")
console.time("Bubbl_S"); bubblesort(rand200k);                  console.timeEnd("Bubbl_S");
console.time("Inser_S"); insertionsort(rand200k);               console.timeEnd("Inser_S");
console.time("Merge_S"); mergesort(rand200k);                   console.timeEnd("Merge_S");
console.time("Selet_S"); seletionsort(rand200k);                console.timeEnd("Selet_S");
console.time("Quick_S"); quicksort(rand200k, 0, size200k.length); console.timeEnd("Quick_S");
console.log("=====================")
console.log("== DESC ")
console.time("Bubbl_S"); bubblesort(desc200k);                  console.timeEnd("Bubbl_S");
console.time("Inser_S"); insertionsort(desc200k);               console.timeEnd("Inser_S");
console.time("Merge_S"); mergesort(desc200k);                   console.timeEnd("Merge_S");
console.time("Selet_S"); seletionsort(desc200k);                console.timeEnd("Selet_S");
console.time("Quick_S"); quicksort(desc200k, 0, size200k.length); console.timeEnd("Quick_S");

console.log("=====================")
console.log("===== 300K CALLS =====")
console.log("=====================")
console.log("== ASCE ")
console.time("Bubbl_S"); bubblesort(asce300k);                  console.timeEnd("Bubbl_S");
console.time("Inser_S"); insertionsort(asce300k);               console.timeEnd("Inser_S");
console.time("Merge_S"); mergesort(asce300k);                   console.timeEnd("Merge_S");
console.time("Selet_S"); seletionsort(asce300k);                console.timeEnd("Selet_S");
console.time("Quick_S"); quicksort(asce300k, 0, size300k.length); console.timeEnd("Quick_S");
console.log("=====================")
console.log("== RAND ")
console.time("Bubbl_S"); bubblesort(rand300k);                  console.timeEnd("Bubbl_S");
console.time("Inser_S"); insertionsort(rand300k);               console.timeEnd("Inser_S");
console.time("Merge_S"); mergesort(rand300k);                   console.timeEnd("Merge_S");
console.time("Selet_S"); seletionsort(rand300k);                console.timeEnd("Selet_S");
console.time("Quick_S"); quicksort(rand300k, 0, size300k.length); console.timeEnd("Quick_S");
console.log("=====================")
console.log("== DESC ")
console.time("Bubbl_S"); bubblesort(desc300k);                  console.timeEnd("Bubbl_S");
console.time("Inser_S"); insertionsort(desc300k);               console.timeEnd("Inser_S");
console.time("Merge_S"); mergesort(desc300k);                   console.timeEnd("Merge_S");
console.time("Selet_S"); seletionsort(desc300k);                console.timeEnd("Selet_S");
console.time("Quick_S"); quicksort(desc300k, 0, size300k.length); console.timeEnd("Quick_S");

console.log("=====================")
console.log("===== 1kK CALLS =====")
console.log("=====================")
console.log("== ASCE ")
console.time("Bubbl_S"); bubblesort(asce);                  console.timeEnd("Bubbl_S");
console.time("Inser_S"); insertionsort(asce);               console.timeEnd("Inser_S");
console.time("Merge_S"); mergesort(asce);                   console.timeEnd("Merge_S");
console.time("Selet_S"); seletionsort(asce);                console.timeEnd("Selet_S");
console.time("Quick_S"); quicksort(asce, 0, size1m.length); console.timeEnd("Quick_S");
console.log("=====================")
console.log("== RAND ")
console.time("Bubbl_S"); bubblesort(rand);                  console.timeEnd("Bubbl_S");
console.time("Inser_S"); insertionsort(rand);               console.timeEnd("Inser_S");
console.time("Merge_S"); mergesort(rand);                   console.timeEnd("Merge_S");
console.time("Selet_S"); seletionsort(rand);                console.timeEnd("Selet_S");
console.time("Quick_S"); quicksort(rand, 0, size1m.length); console.timeEnd("Quick_S");
console.log("=====================")
console.log("== DESC ")
console.time("Bubbl_S"); bubblesort(desc);                  console.timeEnd("Bubbl_S");
console.time("Inser_S"); insertionsort(desc);               console.timeEnd("Inser_S");
console.time("Merge_S"); mergesort(desc);                   console.timeEnd("Merge_S");
console.time("Selet_S"); seletionsort(desc);                console.timeEnd("Selet_S");
console.time("Quick_S"); quicksort(desc, 0, size1m.length); console.timeEnd("Quick_S");