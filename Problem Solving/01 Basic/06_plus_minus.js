function plusMinus(arr) {
    // Write your code here
    let score = [0, 0, 0];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            score[0] += 1;
        } else if (arr[i] < 0) {
            score[1] += 1;
        } else {
            score[2] += 1;
        }
    }
    for (let j = 0; j < 3; j++) {
        sum += score[j];
    }
    for (let k = 0; k < 3; k++) {
        score[k] /= sum;
    }
    console.log(score[0]);
    console.log(score[1]);
    console.log(score[2]);
}

let arrays = [-4,3,-9,0,4,1];

plusMinus(arrays);