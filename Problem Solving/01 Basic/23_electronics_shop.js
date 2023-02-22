function getMoneySpent(keyboards, drives, b) {
    let [max, temp] = [0, 0];
    keyboards.forEach(maxk => {
        drives.forEach(maxd => {
            temp = maxk + maxd;
            max = (temp <= b) && (temp > max) ? temp : max;
        });
    });
    return (max === 0) ? -1 : max;
};

let keyboards = [4];
let drives = [5];
let b = 5;

getMoneySpent(keyboards, drives, b);