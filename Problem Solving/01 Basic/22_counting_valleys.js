function countingValleys(steps, path) {
    // Write your code here
    let [elv, val] = [0, 0];
    [...path].forEach(step => {
        if (step === 'U') {
            elv++;
            if (elv === 0) val++;
        } else elv--;
    });
    return val;
};

let steps = 8;
let path = "UDDDUDUU";

console.log(countingValleys(steps, path));