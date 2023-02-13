function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    // let apple = apples.map(sum => sum + a);
    // let orange = oranges.map(sum => sum + b);
    // let i = 0;
    // let j = 0;
    // apple.forEach(sum => {
    //     if (sum >= s && sum <= t) {
    //         i++;
    //     }
    // });
    // orange.forEach(sum => {
    //     if (sum >= s && sum <= t) {
    //         j++;
    //     }
    // });
    // console.log(i);
    // console.log(j);

    let apple_count = apples.filter(value => value + a >= s && value + a <= t).length;
    let orange_count = oranges.filter(value => value + b >= s && value + b <= t).length;
    console.log(apple_count);
    console.log(orange_count);
}

let s = 7;
let t = 10;
let a = 4;
let b = 12;
let apples = [2,3,-4];
let oranges = [3,-2,-4];
countApplesAndOranges(s, t, a, b, apples, oranges);