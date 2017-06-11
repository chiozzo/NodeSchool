console.log(process.argv.slice(2).reduce(function (accumulator, currentValue) {
	return Number(currentValue) + Number(accumulator)
}, 0))