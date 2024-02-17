function randomIndex(min: number, max: number) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomIndex(1, 3));
