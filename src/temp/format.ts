const { log } = console

setTimeout(() => {
	log(0)
})

new Promise((resolve) => {
	log(1)
	resolve(2)
	log(3)
}).then((res) => log(res))

new Promise((resolve) => {
	log(4)
	resolve(5)
})
	.then((res) => log(res))
	.then(() => log(6))

// 1 3 4 2 5 6 0
