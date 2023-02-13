const prompt = require('prompt-sync')();

function miniMaxSum(arr) {
	// Write your code here
	// let min = [...arr];
	// let max = [...arr];
	// min.splice(min.indexOf(Math.max(...min)), 1);
	// max.splice(max.indexOf(Math.min(...max)), 1);
	// let sumMin = min.reduce((partialSum, a) => partialSum + a, 0);
	// let sumMax = max.reduce((partialSum, a) => partialSum + a, 0);
	// console.log(sumMin, sumMax);
    let x = arr.reduce((partialSum, a) => partialSum + a, 0);
    let sumMin = x - Math.max(...arr);
    let sumMax = x - Math.min(...arr);
    console.log(sumMin, sumMax);
 }

let arr = prompt('Masukkan angka ');
let num = arr.split(',').map((str) => parseInt(str));
miniMaxSum(num);
