function sockMerchant(n, ar) {
    // Write your code here

    // * Method 1

    // let ar2 = ar.reduce((a,b) => {
    //     if (!a.includes(b)) {
    //         return [...a, b];
    //     };
    //     return a;
    // }, []);
    // let [count, temp] = [0,0];
    // for (let i of ar2) { // iterasi sebanyak array ar2.length dengan nilai2 ar2
    //     for (let j = 0; j < n; j++) {
    //         if (i === ar[j]) temp++;
    //     };
    //     count += ~~(temp/2); // ~~ adalah penganti Math.floor() atau pembulatan ke bawah
    //     temp = 0;
    // };
    // return count;

    // * Method 2

    // let count = 0;
    // ar.sort();
    // for (let i = 0; i < n; i++) {
    //     if (ar[i] === ar[i + 1]) {
    //         count++;
    //         i++;
    //     }
    // }
    // return count;

    // * Method 3

    // let ones = {}, pairs = 0;
    // for (let i = 0; i < n; i++) {
    //     if (ones.hasOwnProperty(ar[i])) {
    //         pairs++;
    //         delete ones[ar[i]];
    //     } else {
    //         ones[ar[i]] = 0;
    //     }
    // }
    // return pairs

    // * Method 4

    var ones = {};
    return ar.reduce((pairs, i) => {
        if (ones[i]) {
            delete ones[i];
            return pairs + 1;
        } else {
            ones[i] = true;
            return pairs;
        }
    }, 0);
};

let n = 9;
let ar = [10,20,20,10,10,30,50,10,20];

console.log(sockMerchant(n,ar));