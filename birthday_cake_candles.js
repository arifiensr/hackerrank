function birthdayCakeCandles(candles) {
	// Write your code here
	let x = Math.max(...candles);
	let y = 0;
	function myFunc(sum) {
		if (sum == x) {
			y++;
		}
	}
	candles.forEach(myFunc);
	return y;
}

console.log(birthdayCakeCandles([4, 4, 1, 3]));
