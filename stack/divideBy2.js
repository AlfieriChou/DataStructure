const Stack = require('./stack')

function divideBy2 (decNumber) {
	let remStack = new Stack()
	let rem
	let binaryString = ''

	while (decNumber > 0) {
		rem = Math.floor(decNumber % 2)
		remStack.push(rem)
		decNumber = Math.floor(decNumber / 2)
	}

	while (!remStack.isEmpty()) {
		binaryString += remStack.pop().toString()
	}

	return binaryString
}

console.log(divideBy2(344))