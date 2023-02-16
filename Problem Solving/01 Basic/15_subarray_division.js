function birthday(s, d, m) {
    // Write your code here
    // let [temp,sum] = [0,0];
    // for (let i = 0; i <= (s.length - m); i++) {
    //     for (let j = 0; j < m; j++) {
    //         temp += s[i+j];
    //     }
    //     if (temp == d) sum++;
    //     temp = 0;
    // }
    // return sum;

    //run loop
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        let arr = s.slice(0 + i, m + i);
        console.log(arr);
        if (arr.reduce((a,b) => a + b) === d) {           
            count++;         
        };     
    };
    return count;
};

let s = [1,2,1,3,2];
let d = 3;
let m = 2;

console.log(birthday(s,d,m));