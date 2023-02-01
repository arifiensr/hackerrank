// function timeConversion(s) {
//     // Write your code here
//     let format = s.substring(8);
//     let hour = parseInt(s.substring(0,2), 10);
//     let minute = s.substring(2,8);
//     let time = '';
//     if (format == 'PM' && hour == 12) {
//         time = `${hour}` + minute;
//     } else if (format == 'PM') {
//         time = `${hour + 12}` + minute;
//     } else if (format == 'AM' && hour == 12) {
//         time = `0${hour - 12}` + minute;
//     } else {
//         time = `0${hour}` + minute;
//     }
//     return time;
// }

function timeConversion(s) {
    // Write your code here
    let format = s.substring(8);
    let hour = parseInt(s.substring(0,2), 10);
    let minute = s.substring(2,8);
    let time = '';
    if (format == 'AM' && hour == 12) {
        time = `0${hour - 12}` + minute;
    } else if (format == 'PM') {
        time = `${hour % 12 + 12}` + minute;
    } else {
        time = s.substring(0,8);
    }
    return time;
}

let input = '02:01:00PM';
console.log(timeConversion(input));