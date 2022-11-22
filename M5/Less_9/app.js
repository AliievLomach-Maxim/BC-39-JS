'use strict'
// ⁡⁣⁣⁢​‌‌‍Модуль 5. Заняття 9. Контекст виклику функції та this​⁡

// const objA = {
// 	// cntxLog(){
// 	//     console.log('this', this)
// 	// }
// 	cntxLog: function () {
// 		console.log('this', this)
// 	},
// 	age: 29,
// }

// const objB = {
// 	newAge: objA.age,
// 	foo: objA.cntxLog,
// }

// objB.foo()

// function fn() {
// 	//this
// 	console.log('this', this)
// }

// fn()

// const fn2 = () => {
// 	//no this
// 	console.log('this', this)
// }
// fn2()

// function fn(a, b, c) {
// 	console.log('this', this.age + 1)
// }

// const obj = {
// 	age: 29,
// }
// const obj2 = {
// 	age: 28,
// }
// const obj3 = {
// 	age: 20,
// }

// fn.apply(obj, [10, 20, 30])
// fn.call(obj2, 10)
// const func = fn.bind(obj3, 10)
// func()

// const customer = {
// 	firstName: 'Jacob',
// 	lastName: 'Mercer',
// 	getFullName() {
// 		return `${this.firstName} ${this.lastName}`
// 	},
// }

// function makeMessage(callback) {
// 	// callback() - це виклик методу getFullName без об'єкта
// 	// console.log('callback', callback)
// 	console.log(`Обробляємо заявку від ${callback()}.`)
// }

// makeMessage(customer.getFullName.bind(customer))
// // makeMessage(customer.getFullName())

// function createProduct(callback) {
// 	callback({
// 		...this,
// 		id: Date.now(),
// 	})
// }

// const obj = {
// 	name: '🍎',
// 	price: 30,
// 	quantity: 3,
// 	logProduct(product) {
// 		console.log('product', this)
// 	},
// 	logTotalPrice(product) {
// 		const total = this.price * this.quantity
// 		console.log('total', total)
// 	},
// }

// createProduct.call(obj, obj.logProduct.bind(obj))
// createProduct.call(obj, obj.logTotalPrice.bind(obj))

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟭 - Майстерня коштовностей​⁡
// Напишіть метод calcTotalPrice(stoneName), який приймає назву каменю і розраховує та повертає загальну вартість каменів з таким ім'ям, ціною та кількістю з властивості stones.

// const chopShop = {
// 	stones: [
// 		{ name: 'Emerald', price: 1300, quantity: 4 },
// 		{ name: 'Diamond', price: 2700, quantity: 3 },
// 		{ name: 'Sapphire', price: 1400, quantity: 7 },
// 		{ name: 'Ruby', price: 800, quantity: 2 },
// 	],
// 	calcTotalPrice(stoneName) {
// 		// 1 - перебрати масив - stones, щоб знайти назву каменю
// 		// 2 - рахуємо загальну вартість всіх камінців price * quantity
// 		// 3 - повертаємо вартість
// 		// return this.stones.forEach((el) => { //не працює
// 		// 	let total = 0
// 		// 	if (el.name === stoneName) {
// 		// 		total = el.price * el.quantity
// 		// 	}
// 		// 	console.log('total', total)
// 		// 	return total
// 		// })
// 		// let total = 0
// 		// for (const el of this.stones) {
// 		// 	if (el.name === stoneName) {
// 		// 		total = el.price * el.quantity
// 		// 	}
// 		// }
// 		// return total
// 		const obj = this.stones.find((el) => el.name === stoneName)
// 		console.log(obj.price * obj.quantity)
// 	},
// }

// console.log(chopShop.calcTotalPrice('Emerald')) // 5200
// console.log(chopShop.calcTotalPrice('Diamond')) // 8100
// console.log(chopShop.calcTotalPrice('Sapphire')) // 9800
// console.log(chopShop.calcTotalPrice('Ruby')) // 1600

// const chopShop = {
// 	stones: [
// 		{ name: 'Emerald', price: 1300, quantity: 4 },
// 		{ name: 'Diamond', price: 2700, quantity: 3 },
// 		{ name: 'Sapphire', price: 1400, quantity: 7 },
// 		{ name: 'Ruby', price: 800, quantity: 2 },
// 	],
// 	calcTotalPrice: function(stoneName) {
// 		const obj = this.stones.find((el) => el.name === stoneName)
// 		console.log(obj.price * obj.quantity)
// 	},
// }
// const chopShop2 = {
// 	stones: [
// 		{ name: 'Emerald2', price: 1300, quantity: 4 },
// 		{ name: 'Diamond2', price: 2700, quantity: 3 },
// 		{ name: 'Sapphire2', price: 1400, quantity: 7 },
// 		{ name: 'Ruby2', price: 800, quantity: 2 },
// 	],
// }

// chopShop.calcTotalPrice.call(chopShop2, 'Emerald2') // 5200

// function calcTotalPrice(stoneName) {
// 	console.log('this', this)

// 	const obj = this.stones.find((el) => el.name === stoneName)
// 	console.log(obj.price * obj.quantity)
// }

// const chopShop = {
// 	stones: [
// 		{ name: 'Emerald', price: 1300, quantity: 4 },
// 		{ name: 'Diamond', price: 2700, quantity: 3 },
// 		{ name: 'Sapphire', price: 1400, quantity: 7 },
// 		{ name: 'Ruby', price: 800, quantity: 2 },
// 	],
// }
// const chopShop2 = {
// 	stones: [
// 		{ name: 'Emerald2', price: 1300, quantity: 4 },
// 		{ name: 'Diamond2', price: 2700, quantity: 3 },
// 		{ name: 'Sapphire2', price: 1400, quantity: 7 },
// 		{ name: 'Ruby2', price: 800, quantity: 2 },
// 	],
// }
// const bindCalc = calcTotalPrice.bind(chopShop, 'Emerald')
// bindCalc()

// // calcTotalPrice.call(chopShop, 'Emerald') // 5200
// // calcTotalPrice.call(chopShop2, 'Emerald2') // 5200

function calcTotalPrice(stoneName, callback) {
	const obj = callback(stoneName)
    console.log(obj.price * obj.quantity)
}

function x(stoneName) {
	return this.stones.find((el) => el.name === stoneName)
}

const chopShop = {
	stones: [
		{ name: 'Emerald', price: 1300, quantity: 4 },
		{ name: 'Diamond', price: 2700, quantity: 3 },
		{ name: 'Sapphire', price: 1400, quantity: 7 },
		{ name: 'Ruby', price: 800, quantity: 2 },
	],
}
const chopShop2 = {
	stones: [
		{ name: 'Emerald2', price: 1300, quantity: 4 },
		{ name: 'Diamond2', price: 2700, quantity: 3 },
		{ name: 'Sapphire2', price: 1400, quantity: 7 },
		{ name: 'Ruby2', price: 800, quantity: 2 },
	],
}
calcTotalPrice.call(chopShop, 'Emerald', x.bind(chopShop))

// calcTotalPrice.call(chopShop, 'Emerald') // 5200
// calcTotalPrice.call(chopShop2, 'Emerald2') // 5200

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟮 - Телефонна книга​⁡
// Виконайте рефакторинг методів об'єкту phonebook щоб код запрацював.

// const phoneBook = {
// 	contacts: [],
// 	add(contact) {
// 		const newContact = {
// 			list: 'default',
// 			...contact,
// 			id: generateId(),
// 			createdAt: getDate(),
// 		}
// 		contacts.push(newContact)
// 	},
// 	generateId() {
// 		return '_' + Math.random().toString(36).substr(2, 9)
// 	},
// 	getDate() {
// 		return Date.now()
// 	},
// }

// phoneBook.add({
// 	name: 'Mango',
// 	email: 'mango@mail.com',
// 	list: 'friends',
// })

// phoneBook.add({
// 	name: 'Poly',
// 	email: 'poly@hotmail.com',
// })
// console.log('phoneBook', phoneBook.contacts)

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 3 - Калькулятор​⁡
// Створіть об'єкт calculator з трьома методами:

// read(a, b)- приймає два значення та зберігає їх як властивості об'єкта.
// add() - повертає суму збережених значень.
// mult() - перемножує збережені значення та повертає результат.

// const calculator = {}
