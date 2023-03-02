// function designerPdfViewer(h, word) {
//     // Write your code here
//     const letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
//     let test = word.split("").map(w => h[letters.indexOf(w)]);
//     return Math.max(...test) * test.length;
// }

function designerPdfViewer(h, word) {
    // Write your code here
    return Math.max(...word.split("").map(w => h[w.charCodeAt() - 97])) * word.length;
}

let h = [1,3,1,3,1,4,1,3,2,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,7];
let word = "zaba";
console.log(designerPdfViewer(h, word));