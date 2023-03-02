// * Ini cara di luar nalar

// function formingMagicSquare(s) {
    
//     let
//         n = 8,
//         costs = Array(n).fill(0),
//         magic = [[4, 3, 8], [9, 5, 1], [2, 7, 6]]

//     for (let i = 0; i < n; i++) {
//         const isEven = i % 2 === 0

//         magic.forEach(([ a, b, c ], j) => {
//             costs[i] += Math.abs(s[isEven ? 0 : 2][j] - a)
//             costs[i] += Math.abs(s[1][j] - b)
//             costs[i] += Math.abs(s[isEven ? 2 : 0][j] - c)
//         })

//         if (isEven) s = [0, 1, 2].map(j => [s[2][j], s[1][j], s[0][j]])
//     }
    
//     return Math.min(...costs)

// }

function formingMagicSquare(s) {
    let magic = [
        [[8, 1, 6], [3, 5, 7], [4, 9, 2]],
        [[6, 1, 8], [7, 5, 3], [2, 9, 4]],
        [[4, 9, 2], [3, 5, 7], [8, 1, 6]],
        [[2, 9, 4], [7, 5, 3], [6, 1, 8]], 
        [[8, 3, 4], [1, 5, 9], [6, 7, 2]], 
        [[4, 3, 8], [9, 5, 1], [2, 7, 6]], 
        [[6, 7, 2], [1, 5, 9], [8, 3, 4]], 
        [[2, 7, 6], [9, 5, 1], [4, 3, 8]]
    ];

    let count = Array(8).fill(0);
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 3; j++) {
            for (let k = 0; k < 3; k++) {
                count[i] += Math.abs(s[j][k] - magic[i][j][k]);
            }
        }
    }
    
    return Math.min(...count);
}

let s = [[5,3,4],[1,5,8],[6,4,2]];

// formingMagicSquare(s);

console.log(formingMagicSquare(s));