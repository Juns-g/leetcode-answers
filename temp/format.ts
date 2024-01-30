const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
rl.on('line', function (line: any) {
	console.log("🚀 ~ line:", line)
	const [str, ch] = line.split(' ');
	let ans = 0;
	Array.from(str).forEach((item) => {
		if (item === ch) ans++;
	});
	console.log(ans);
});
