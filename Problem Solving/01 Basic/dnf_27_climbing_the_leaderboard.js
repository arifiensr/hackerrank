const { concat } = require("lodash");

function climbingLeaderboard(ranked, player) {
    let rank = 1;
    let rankList = concat([1], ranked.map((score, i) => {
        if (score === ranked[i + 1]) return rank;
        else {
            rank++;
            return rank;
        }
    }))
    rankList.pop();

    let climb = player.map(pscore => {
        let rank = 1;
        ranked.forEach((rscore,i) => {
            if (pscore >= rscore) rank = rankList[i];
        });
        return rank;
    })
    console.log(climb);
}

let ranked = [100,100,50,40,40,20,10];
let player = [5,25,50,120];

console.log(climbingLeaderboard(ranked, player));