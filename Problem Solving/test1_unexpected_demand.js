function filledOrders(order, k) {
    // Write your code here
    let count = 0;
    order.sort((a, b) => a - b);
    order.map(x => {
        if (k >= x) {
            k -= x;
            count++;
        };
    });
    return count;
}

let order = [10,30];
let k = 40;

console.log(filledOrders(order, k));