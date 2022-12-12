// class Animal {
// 	constructor({ name, color }) {
// 		this.name = name
// 		this.color = color
// 		this.type = 'Animal'
// 	}
// 	// callBack(x) {
// 	// 	// console.log('name', this.name)
// 	// 	return this.name + x
// 	// }
// }

// function voice(clb, x) {
// 	x += 2
// 	console.log('Animal', clb(x))
// }

// function voice2(name) {
// 	console.log('Animal', name)
// }

// const dog = new Animal({ name: 'Rex', color: 'white' })
// // const dog2 = new Animal({ name: 'Rex2', color: 'white' })
// // const dog3 = new Animal({ name: 'Rex3', color: 'white' })
// // dog.voice(dog.callBack)
// // dog.voice(dog.callBack.call(dog))
// // dog.voice(dog.callBack.bind(dog))

// voice(dog.callBack.bind(dog), 10)
// voice(dog.callBack.bind(dog), 100)
// // voice(dog2.callBack.bind(dog2), 12)
// // voice(dog3.callBack.bind(dog3), 2)

// voice2(dog.callBack(10 + 2))
// // voice2(dog2.callBack())
// // voice2(dog3.callBack())

// class Animal {
// 	#name
// 	constructor({ name, color }) {
// 		this.#name = name
// 		this.color = color
// 		this.type = 'Animal'
// 	}
// 	get name() {
// 		return `Privat name = ${this.#name}`
// 	}

// 	set name(newName) {
// 		if (typeof newName === 'string') this.#name = newName
// 		else alert('must be str')
// 	}

// 	// rename(newName) {
// 	// 	this.#name = newName
// 	// 	console.log('#name', this.#name)
// 	// }
// }
// const cat = new Animal({ name: 'Murzik', color: 'black' })
// // cat.rename('Vasya')
// cat.name = 100
// cat.color = 'white'
// console.log('name', cat.name)

// const start = new Date()
// for (let i = 0; i < 1000000; i++) {}
// const end = new Date()
// console.log('result', end.getTime() - start.getTime())

// function getParams(x) {
// 	for (let i = 0; i < 10000000; i++) {
// 		x += i
// 	}
// 	return x
// }

// const start = new Date()
// getParams(10)
// const end = new Date()
// console.log('result', end.getTime() - start.getTime())

// function testSpeed(fn) {
// 	const arr = []
// 	for (let i = 0; i < 10; i++) {
// 		const start = new Date()
// 		fn(10)
// 		const end = new Date()
// 		arr.push(end.getTime() - start.getTime())
// 	}
// 	const sum = arr.reduce((acc, el) => {
// 		return acc + el
// 	}, 0)
// 	console.log('arr', arr)
// 	console.log('result', sum / arr.length)
// }
// testSpeed(getParams)
