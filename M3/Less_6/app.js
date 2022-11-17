// ⁡⁣⁣⁢​‌‌‍Модуль 𝟯 Заняття 𝟲. Деструктуризація та rest/sprea​⁡

let _______________________________________________________________________________________________________________________________________
_______________________________________________________________________________________________________________________________________

let red = 100
let green = 200
let blue = 50

const rgb = [200, 255, 100]

// Присвоєння через деструктуризацію для red та green
;[red, green] = rgb

console.log(`R: ${red}, G: ${green}, B: ${blue}`) // R: 200, G: 255, B: 50
;[_, _, blue] = rgb

console.log(`R: ${red}, G: ${green}, B: ${blue}`) // R: 200, G: 255, B: 50

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 1 - Деструктуризація​⁡
// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору
// незалежних аргументів.

// function sayHi(name) {
// 	console.log('name', name)
// }
// sayHi('Alex')

// function calcBMI(weight,height) {

// 	const numericWeight = Number(weight.replace(',', '.'))
// 	const numericHeight = Number(height.replace(',', '.'))
// 	return Number((numericWeight / numericHeight ** 2).toFixed(1))
// }

// function calcBMI({ weight, height }) {
// 	// const { weight, height } = props

// 	const numericWeight = Number(weight.replace(',', '.'))
// 	const numericHeight = Number(height.replace(',', '.'))
// 	return Number((numericWeight / numericHeight ** 2).toFixed(1))
// }

// // Було
// console.log(calcBMI('88,3', '1.75'))
// console.log(calcBMI('68,3', '1.65'))
// console.log(calcBMI('118,3', '1.95'))

// // Очікується
// const someObj = {
// 	weight: '88,3',
// 	height: '1.75',
// }
// console.log(calcBMI(someObj))
// const someObj2 = {
// 	weight: '88,3',
// 	height: '1.75',
// }

// console.log(calcBMI(someObj2))
// console.log(
// 	calcBMI({
// 		height: '1.75',
// 		weight: '88,3',
// 	})
// )
// console.log(
// 	calcBMI({
// 		weight: '68,3',
// 		height: '1.65',
// 	})
// )
// console.log(
// 	calcBMI({
// 		weight: '118,3',
// 		height: '1.95',
// 	})
// )

_______________________________________________________________________________________________________________________________________
_______________________________________________________________________________________________________________________________________

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟮 - Деструктуризація​⁡
// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість
// набору незалежних аргументів.

// // Було
// function printContactsInfo(names, phones) {
// 	// const nameList = names.split(',')
// 	// const phoneList = phones.split(',')
// 	// for (let i = 0; i < nameList.length; i += 1) {
// 	// 	console.log(`${nameList[i]}: ${phoneList[i]}`)
// 	// }
// }

// printContactsInfo(
// 	'Jacob,William,Solomon,Artemis',
// 	'89001234567,89001112233,890055566377,890055566300'
// )

//стало:

// const users = {
// 	names: 'Jacob,William,Solomon,Artemis',
// 	phones: '89001234567,89001112233,890055566377,890055566300',
// }

// function printContactsInfo(data) {
// 	const nameList = data.names.split(',') //звертаємось до ключів об'єкту data.names
// 	const phoneList = data.phones.split(',') //звертаємось до ключів об'єкту data.phones
// 	for (let i = 0; i < nameList.length; i += 1) {
// 		console.log(`${nameList[i]}: ${phoneList[i]}`)
// 	}
// }

// printContactsInfo(users)

// function printContactsInfo(data) {
// 	//виносимо значення ключів об'єкту у нові змінні
// 	const names = data.names
// 	const phones = data.phones

// 	const nameList = names.split(',')
// 	const phoneList = phones.split(',')
// 	for (let i = 0; i < nameList.length; i += 1) {
// 		console.log(`${nameList[i]}: ${phoneList[i]}`)
// 	}
// }
// printContactsInfo(users)

// function printContactsInfo(data) {
// 	//виносимо значення ключів об'єкту у нові змінні
// 	// за допомогою деструктуризації

// 	const { names } = data
// 	const { phones } = data

// 	const nameList = names.split(',')
// 	const phoneList = phones.split(',')
// 	for (let i = 0; i < nameList.length; i += 1) {
// 		console.log(`${nameList[i]}: ${phoneList[i]}`)
// 	}
// }
// printContactsInfo(users)

// function printContactsInfo(data) {
// 	//виносимо значення ключів об'єкту у нові змінні
// 	// за допомогою деструктуризації

// 	// const { names } = data
// 	// const { phones } = data

// 	// об'єднуємо деструктуризацію в один виклик
// 	const { names, phones } = data

// 	const nameList = names.split(',')
// 	const phoneList = phones.split(',')
// 	for (let i = 0; i < nameList.length; i += 1) {
// 		console.log(`${nameList[i]}: ${phoneList[i]}`)
// 	}
// }
// printContactsInfo(users)

// переносимо дестрктуризацію до параметрів ф-ї
// function printContactsInfo({ names, phones }) {
// 	// під капотом js виконує наступне:
// 	// data - це параметри які ми отримуємо у ф-ю
// 	// const names = data-> data.names-> 'Jacob,William,Solomon,Artemis'
// 	// const phones= data-> data.phones->'89001234567,89001112233,890055566377,890055566300'

// 	const nameList = names.split(',')
// 	const phoneList = phones.split(',')
// 	for (let i = 0; i < nameList.length; i += 1) {
// 		console.log(`${nameList[i]}: ${phoneList[i]}`)
// 	}
// }
// printContactsInfo(users)

_______________________________________________________________________________________________________________________________________
_______________________________________________________________________________________________________________________________________

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟯 - Глибока деструктуризація​⁡
// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість
// набору незалежних аргументів.

// // Було
// function getBotReport(companyName, repairBots, defenceBots) {
// 	return `${companyName} has ${repairBots + defenceBots} bots in stock`
// }

// console.log(getBotReport('Cyberdyne Systems', 150, 50))

// // Стало
// function getBotReport(data) {
// 	return `${data.companyName} has ${
// 		data.bots.repair + data.bots.defence
// 	} bots in stock`
// }
// function getBotReport(data) {
// 	const companyName = data.companyName
// 	const repairBots = data.bots.repair
// 	const defenceBots = data.bots.defence

// 	return `${companyName} has ${repairBots + defenceBots} bots in stock`
// }
// function getBotReport(data) {
// 	const { companyName } = data
// 	const { repair, defence } = data.bots
// 	const repairBots = repair
// 	const defenceBots = defence

// 	return `${companyName} has ${repairBots + defenceBots} bots in stock`
// }
// function getBotReport(data) {
// 	const { companyName } = data
// 	const { repair: repairBots, defence: defenceBots } = data.bots

// 	return `${companyName} has ${repairBots + defenceBots} bots in stock`
// }
// function getBotReport(data) {
// 	const {
// 		companyName,
// 		bots: { repair: repairBots, defence: defenceBots },
// 	} = data

// 	return `${companyName} has ${repairBots + defenceBots} bots in stock`
// }
// function getBotReport({
// 	companyName = 'DefaultName',
// 	bots: {
// 		repair: repairBots,
// 		defence: defenceBots,
// 	},
// }) {
// 	return `${companyName} has ${repairBots + defenceBots} bots in stock`
// }

// const someObj = {
// 	companyName: 'Cyberdyne Systems',
// 	bots: {
// 		repair: 150,
// 		defence: 50,
// 	},
// }

// const someObj2 = {
// 	bots: {
// 		repair: 150,
// 		defence: 50,
// 		defence2: 500,
// 	},
// }
// console.log(getBotReport(someObj))
// console.log(getBotReport(someObj2))
_______________________________________________________________________________________________________________________________________
_______________________________________________________________________________________________________________________________________

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟰 - Деструктуризация​⁡
// Перепиши функцію так, щоб вона приймала об'єкт параметрів із властивостями companyName
// та stock
// та виводила репорт про кількість товарів на складі будь-якої компанії.

//

// function getStockReport({ companyName, ...args }) {
// 	// const valueOfStock = Object.values(stock)
// 	// let total = 0
// 	// for (const value of valueOfStock) {
// 	// 	total += value
// 	// }
// 	// return `${companyName} has ${total} in stock`
// }

// console.log(
// 	getStockReport({
// 		companyName: 'Cyberdyne Systems',
// 		stock: {
// 			repairBots: 150,
// 			defenceBots: 50,
// 		},
// 		stock2: {
// 			repairBots: 150,
// 			defenceBots: 50,
// 		},
// 	})
// ) // "Cyberdyne Systems has 200 items in stock"

// console.log(
// 	getStockReport({
// 		companyName: 'Belacci',
// 		stock: {
// 			shoes: 20,
// 			skirts: 10,
// 			hats: 5,
// 		},
// 	})
// ) // "Belacci has 35 item in stock"

_______________________________________________________________________________________________________________________________________
_______________________________________________________________________________________________________________________________________

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟱 - Операція 𝘀𝗽𝗿𝗲𝗮𝗱​⁡
// Доповни функцію createContact(partialContact) так, щоб вона повертала новий об'єкт контакту
// з доданими властивостями id та createdAt, а також list зі значенням "default" якщо
// в partialContact немає такої властивості.

//

// function createContact(partialContact) {
// 	return {
// 		list: 'default',
// 		...partialContact,
// 		id: generateId(),
// 		createdAt: Date.now(),
// 	}
// }

// console.log(
// 	createContact({
// 		name: 'Mango',
// 		email: 'mango@mail.com',
// 		list: 'friends',
// 	})
// )

// console.log(
// 	createContact({
// 		name: 'Poly',
// 		email: 'poly@hotmail.com',
// 	})
// )

// function generateId() {
// 	return '_' + Math.random().toString(36).substr(2, 9)
// }

_______________________________________________________________________________________________________________________________________
_______________________________________________________________________________________________________________________________________

// ⁡⁢⁣⁣​‌‍‌⁡⁢⁣⁣​‌‍‌Example 6 - Операція rest​⁡
// Напиши функцію transformUsername(user) так, щоб вона повертала новий об'єкт із властивістю fullName, замість firstName та lastName.

// //
// function transformId({ firstName, lastName, ...otherProps }) {
// 	return {
// 		fullName: `${firstName} ${lastName}`,
// 		...otherProps,
// 	}
// }

// console.log(
// 	transformId({
// 		id: 1,
// 		firstName: 'Jacob',
// 		lastName: 'Mercer',
// 		email: 'j.mercer@mail.com',
// 		friendCount: 40,
// 	})
// )

// console.log(
// 	transformId({
// 		id: 2,
// 		firstName: 'Adrian',
// 		lastName: 'Cross',
// 		email: 'a.cross@hotmail.com',
// 		friendCount: 20,
// 	})
// )
