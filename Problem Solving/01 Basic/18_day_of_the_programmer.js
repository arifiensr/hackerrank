function dayOfProgrammer(year) {
    // Write your code here
    let date = '';
    if (year === 1918) {
        date = `26.09.${year}`
    } else if (year > 1918) {
        ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)
            ? date = `12.09.${year}`
            : date = `13.09.${year}`;
    } else {
        (year % 4 === 0)
            ? date = `12.09.${year}`
            : date = `13.09.${year}`;
    }
    return date;
};

let year = 1918;

console.log(dayOfProgrammer(year));