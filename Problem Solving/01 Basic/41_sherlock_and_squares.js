function squares(a, b) {
	let min = Math.ceil(Math.sqrt(a));
	let max = Math.floor(Math.sqrt(b));
	return max - min + 1;
}

let [a, b] = [17, 19];

console.log(squares(a, b));
