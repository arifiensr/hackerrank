function viralAdvertising(n) {
    // Write your code here
    let [shared, liked, total] = [5, 0, 0];
    for (let i = 0; i < n; i++) {
        liked = Math.floor(shared / 2);
        total += liked;
        shared = liked * 3;
    }
    return total;
}

let n = 5;

console.log(viralAdvertising(n));