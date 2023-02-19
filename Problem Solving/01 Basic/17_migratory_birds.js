// function migratoryBirds(arr) {
//     // Write your code here
//     let [a,b,c,d,e,i,max] = [0,0,0,0,0,0,0];
//     arr.forEach(arr => {
//         switch (arr) {
//             case 1: a++; break;
//             case 2: b++; break;
//             case 3: c++; break;
//             case 4: d++; break;
//             case 5: e++;
//         }
//     });
//     [a,b,c,d,e].forEach((arr,index) => {
//         if (arr > max) {max = arr; i = index+1;}
//     })
//     return i;
// }

function migratoryBirds(arr) {
    let sorted = arr.sort();
    let [ans,max,count] = [sorted[0],1,0];
    
    for (let i = 0; i < sorted.length; i++) {
        (sorted[i] === sorted[i-1]) ? count++ : count = 0;
        if (count > max) {ans = sorted[i]; max = count;}
    }
    return ans;
}

let arr = [1,2,3,4,5,4,3,2,1,3,4];

console.log(migratoryBirds(arr));