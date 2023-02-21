// function pageCount(n, p) {
//     // Write your code here
//     let left = Math.floor(p/2);
//     let [right, min] = [0,0];
//     if ((n % 2 === 0 && p >= n) || (n % 2 !== 0 && p < n)) {
//         right = Math.floor(Math.abs((p - n)) / 2);
//     } else
//         right = Math.ceil(Math.abs((p - n)) / 2);
//     left <= right ? min = left : min = right;
//     return min;
// }

function pageCount(n, p) {
    /*
		  n: the number of pages in the book
		  p: the page number to turn to
    */

    const pageTurns = Math.floor(p / 2);
    const totalTurns = Math.floor(n / 2);

    /* Returns the total number of page turns it takes to get
    to a page or how many it requires if starting from the back */

    return Math.min(pageTurns, totalTurns - pageTurns);
}

let [n, p] = [7,3];

console.log(pageCount(n, p));

// let left = Math.floor(p/2);
// let right = 0;
// if ((n % 2 === 0 && p >= n) || (n % 2 !== 0 && p < n)) {
//     right = Math.floor(Math.abs((p - n)) / 2);
// } else if (n % 2 !== 0 && p >= n) {
//     right = Math.ceil(Math.abs((p - n)) / 2);
// } else if (n % 2 === 0 && p < n) {
//     right = Math.ceil(Math.abs((p - n)) / 2);
// } else {
//     right = Math.floor(Math.abs((p - n)) / 2);
// }
// console.log(right);