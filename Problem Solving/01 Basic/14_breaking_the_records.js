function breakingRecords(scores) {
    // Write your code here
    let [hi, lo] = [scores[0], scores[0]];
    let [max, min] = [0, 0];
    scores.forEach(score => {
        if (score > hi) {hi = score; max++};
        if (score < lo) {lo = score; min++};
    });
    return [max, min];
}

let scores = [10,5,20,20,4,5,2,25,1];

console.log(breakingRecords(scores).join(" "));