function kangaroo(x1, v1, x2, v2) {
	// Write your code here
	if (x1 < x2 && v1 < v2) return 'NO';
	else if ((Math.abs(x1 - x2) % (Math.abs(v1 - v2))) === 0) return 'YES';
	else return 'NO';
}

let array = [21, 6, 47, 3];
let x1 = array[0];
let v1 = array[1];
let x2 = array[2];
let v2 = array[3];

console.log(kangaroo(x1, v1, x2, v2));
