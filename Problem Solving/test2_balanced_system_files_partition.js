function mostBalancedPartition(x, files_size) {
    // Write your code here
    let arrays = [];
    let sum = files_size.reduce((x, b) => x + b, 0);
    function recall(index) {
        let count = 0;
        for (let i = index; i < x.length; i++) {
            if (x[i] === index) {
                count += files_size[i] + recall(i);
            }
        }
        return count;
    }
    for (let i = 0; i < x.length - 1; i++) {
        arrays[i] = files_size[i + 1] + recall(i + 1);
    };
    return Math.min(...arrays.map(x => Math.abs(sum - (x * 2))));
}

let x = [-1, 0, 0, 1, 1, 2];
let files_size = [1, 2, 2, 1, 1, 1];

console.log(mostBalancedPartition(x, files_size));