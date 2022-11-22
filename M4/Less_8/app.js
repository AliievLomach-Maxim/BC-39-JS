// ⁡⁣⁣⁢​‌‌‍Модуль 𝟰. Заняття 𝟴. Перебираючі методи масиву⁡​⁡

// ​‌‍‌⁡⁢⁢⁢Колекція об'єктів для всіх прикладів з автомобілями⁡​
const cars = [
	{
		make: 'Honda',
		model: 'CR-V',
		type: 'suv',
		amount: 14,
		price: 24045,
		onSale: true,
	},
	{
		make: 'Honda',
		model: 'Accord',
		type: 'sedan',
		amount: 2,
		price: 22455,
		onSale: true,
	},
	{
		make: 'Mazda',
		model: 'Mazda 6',
		type: 'sedan',
		amount: 8,
		price: 24195,
		onSale: false,
	},
	{
		make: 'Mazda',
		model: 'CX-9',
		type: 'suv',
		amount: 7,
		price: 31520,
		onSale: true,
	},
	{
		make: 'Toyota',
		model: '4Runner',
		type: 'suv',
		amount: 19,
		price: 34210,
		onSale: false,
	},
	{
		make: 'Toyota',
		model: 'Sequoia',
		type: 'suv',
		amount: 16,
		price: 45560,
		onSale: false,
	},
	{
		make: 'Toyota',
		model: 'Tacoma',
		type: 'truck',
		amount: 4,
		price: 24320,
		onSale: true,
	},
	{
		make: 'Ford',
		model: 'F-150',
		type: 'truck',
		amount: 11,
		price: 27110,
		onSale: true,
	},
	{
		make: 'Ford',
		model: 'Fusion',
		type: 'sedan',
		amount: 13,
		price: 22120,
		onSale: true,
	},
	{
		make: 'Ford',
		model: 'Explorer',
		type: 'suv',
		amount: 6,
		price: 31660,
		onSale: false,
	},
]

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟭 - Метод 𝗺𝗮𝗽​⁡
// Нехай функція getModels повертає масив моделей (поле model) всіх автомобілів.

// function getModels(cars) {
// 	const newArr = []
// 	for (let i = 0; i < cars.length; i++) {
// 		newArr.push(cars[i].model)
// 	}
// 	return newArr
// }

// function getModels(cars) {
// 	const newArr = []
// 	cars.map(function (car) {
// 		newArr.push(car.model)
// 	})
// 	return newArr
// }

// function getModels(cars) {
// 	const newArr = cars.map(function (car) {
// 		return car.model
// 	})
// 	return newArr
// }
// const getModels = (cars) => cars.map(({ model }) => model)

// console.table(getModels(cars))

//
//
// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟮 - Мет⁡⁢⁣⁣од 𝗺𝗮𝗽​⁡
// Нехай функція makeCarsWithDiscount повертає новий масив об'єктів із змінним значенням властивості price залежно від переданої знижки.

// 1 - продублювати вхідний масив у новий
// 2 - перебрати масив
// 3 - змінити значення властивості price залежно від переданої знижки.
// 4 - повернути новий масив

// function makeCarsWithDiscount(cars,discount){

// }
// const makeCarsWithDiscount = (cars, discount) => {
// 	return cars.map((car) => {
// 		car.price *= 1 - discount
// 		return car
// 	})
// }
// const makeCarsWithDiscount = (cars, discount) =>
// 	cars.map((car) => {
// 		car.price *= 1 - discount
// 		return car
// 	})

// const makeCarsWithDiscount = (cars, discount) =>
// 	cars.map((car) => ({ ...car, price: car.price * (1 - discount) }))

// const makeCarsWithDiscount = (cars, discount) =>
// 	cars.map((car) => ({ ...car, price: car.price * (1 - discount) }))

// console.table(makeCarsWithDiscount(cars, 0.2))
// console.table(makeCarsWithDiscount(cars, 0.4))

//
//
// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟯 - Метод 𝗳𝗶𝗹𝘁𝗲𝗿​⁡
// Нехай функція filterByPrice повертає масив автомобілів ціна яких менша ніж значення параметра threshold.

// const filterByPrice = (cars, threshold) =>
// 	cars.filter((car) => car.price < threshold)

// console.table(filterByPrice(cars, 30000))
// console.table(filterByPrice(cars, 25000))

//
//
// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟰 - Метод 𝗳𝗶𝗹𝘁𝗲𝗿​⁡
// Нехай функція getCarsWithDiscount повертає масив автомобілів властивість onSale яких true.

// const getCarsWithDiscount = (cars) => {
// 	return cars.filter((car) => {
// 		return car.onSale === true
// 	})
// }

// const getCarsWithD = (cars) => {
// 	return cars.filter(function(car){
// 		return car.onSale === true
// 	})
//  }

//  return no use:
// 1 - =>
// &&
// 2 - 1 operation
// &&
// НЕ використовуємо { } для тіла ф-ї

// const getCarsWithDiscount = (cars) => cars.filter(({ onSale }) => onSale === true) // true === true

// const getCarsWithDiscount = (cars) => cars.filter(({ onSale }) => onSale)

// console.table(getCarsWithDiscount(cars))

//
//
// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟱 - Метод 𝗳𝗶𝗹𝘁𝗲𝗿​⁡
// Нехай функція getCarsWithType повертає масив автомобілів тип яких збігається зі значенням параметра type.

// const getCarsWithType = (cars, type) => cars.filter((car) => car.type === type)

// const getCarsWithType = (cars, type) =>
// 	cars.filter(({ type: typeCar }) => typeCar === type)

// console.table(getCarsWithType(cars, 'suv'))
// console.table(getCarsWithType(cars, 'sedan'))

//
//
// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟲 - Метод 𝗳𝗶𝗻𝗱​⁡
// const getCarByModel = (cars, model) => cars.find((car) => car.model === model)

// console.log(getCarByModel(cars, 'F-150'))
// console.log(getCarByModel(cars, 'CX-9'))

//
//
// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟳 - Метод 𝘀𝗼𝗿𝘁​⁡
// Нехай функція sortByAscendingAmount повертає новий масив автомобілів відсортований за зростанням значення якості amount.

// const sortByAscendingAmount = (cars) => {
// 	const newCars = [...cars]
// 	newCars.sort((a, b) => a.amount - b.amount)
// 	// newCars.sort((a, b) => a.amount > b.amount?1:-1)
// 	return newCars
// }
// const sortByAscendingAmount = (cars) =>
// 	[...cars].sort((a, b) => a.amount - b.amount)

// const sortByAscendingAmount = (cars) =>
// 	[...cars].sort((a, b) => b.amount - a.amount)

// console.table(sortByAscendingAmount(cars))

//
//
// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟴 - Метод 𝘀𝗼𝗿𝘁​⁡
// Нехай функція sortByDescendingPrice повертає новий масив автомобілів відсортований за зменшенням значення властивості price.

// const sortByDescendingPrice = (cars) =>
// 	[...cars].sort((a, b) => b.price - a.price)

// console.table(sortByDescendingPrice(cars))

//
//
// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟵 - Метод 𝘀𝗼𝗿𝘁​⁡
// Нехай функція sortByModel повертає новий масив автомобілів відсортований за назвою моделі в алфавітному та зворотному алфавітному порядку, в залежності від значення параметра order.

// const sortByModel = (cars) =>
// 	[...cars].sort((a, b) => b.model.localeCompare(a.model))

// console.table(sortByModel(cars))

// console.table(sortByModel(cars, 'asc'))
// console.table(sortByModel(cars, 'desc'))

//
//
// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟭𝟬 - Метод 𝗿𝗲𝗱𝘂𝗰𝗲​⁡
// Нехай функція getTotalAmount повертає загальну кількість автомобілів (значення властивостей amount).

// const getTotalAmount = (cars) => {
// 	let total = 0
// 	for (let i = 0; i < cars.length; i++) {
// 		total += cars[i].amount
// 	}
// 	return total
// }

// const getTotalAmount = (cars) => cars.reduce((acc, el) => acc + el.amount, 0)

// console.log(getTotalAmount(cars))

// const salary = [100, 200, 300, 900, 1200]
// const salaries = [
// 	{ salary: 100 },
// 	{ salary: 200 },
// 	{ salary: 300 },
// 	{ salary: 900 },
// 	{ salary: 1200 },
// ]

// let total = 0
// for (const el of salary) {
// 	total = total + el
// }
// salaries.forEach((el) => {
// 	total += el.salary //undefined + 100
// })
// console.log('total', total)
// //
// const result = salaries.reduce((total, el) => {
// 	return (total += el.salary) // {} + 200
// }, 0)
// console.log('result', result)
// const' total = salary.reduce((acc, el) => {
// 	console.log('acc', acc)
// 	return (acc += el)
// }, 0)'

// console.log('total', total)

//
//
// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟭𝟭 - Ланцюжки методів​⁡
// Нехай функція getAvailableCarNames повертає масив моделей автомобілів, але тільки тих, які зараз на розпродажі.

// const getModelsOnSale = cars => {};

// console.table(getModelsOnSale(cars));

//
//
// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟭𝟮 - Ланцюжки методів​⁡
// Нехай функція getSortedCarsOnSale повертає масив автомобілів на розпродажі (Властивість onSale), відсортованих за зростанням ціни.

// const getSortedCarsOnSale = cars => {};

// console.table(getSortedCarsOnSale(cars));
//
// SOME/EVERY
// const someArr = [1, 2, 3, 4, 5, 1, 1]
// const result = someArr.some((el) => el > 4)
// console.log('result', result)

// const someArr = [1, 2, 3, 4, 5, 2, 3]
// const result = someArr.every((el) => el > 1)
// console.log('result', result)
