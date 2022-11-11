// ​‌‌‍⁡⁣⁣⁢Модуль 2. Заняття 3. Масиви​​⁡

let _______________________________________________________________________________________________________________________________________
_______________________________________________________________________________________________________________________________________

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟭 - Базові операції з масивом​⁡
// Створіть масив genres з елементами «Jazz» та «Blues».
// Додайте «Рок-н-рол» до кінця.
// Виведіть у консоль перший елемент масиву.
// Виведіть у консоль останній елемент масиву. Код повинен працювати для масиву
// довільної довжини.
// Видаліть перший елемент та виведіть його в консоль. shift
// Вставте «Country» та «Reggae» на початок масиву. unshift/splice
// const genres = ;

// const genres = ['Jazz', 'Blues']
// genres.push('Rock&Roll')
// // genres.shift()
// // const x = genres.pop()
// // genres.unshift(x)
// genres.splice(genres.length - 1, 1)

// console.log('genres', genres)

_______________________________________________________________________________________________________________________________________
_______________________________________________________________________________________________________________________________________

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟮 - Масиви та рядки​⁡
// Напиши скрипт для обчислення площі прямокутника зі сторонами,
// значення яких зберігаються у змінній values у вигляді рядка.
// Значення гарантовано розділені пробілом. split

// const values = '8 11'
// const numbers = values.split(' ')
// const result = numbers[0] * numbers[1]

// console.log('result', result)

_______________________________________________________________________________________________________________________________________
_______________________________________________________________________________________________________________________________________

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟯 - Перебір масиву​⁡
// Напиши скрипт для перебору масиву fruits циклом for.
// Для кожного елемента масиву виведи в консоль рядок у форматі
// номер_елемента: значення_елемента.
// Нумерація елементів повинна починатися з 1.

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋']

// const arrSlice = numbers.slice(0, 3)
// console.log('arrSlice', arrSlice)

// for (let i = 0; i < numbers.length; i += 3) {
// 	console.log('i', numbers[i])
// }

// for (let i = 0; i < fruits; i++) {
// 	console.log(`${i + 1}: ${fruits[i]}`)
// }

// for (const e of numbers) {
// 	console.log('element', e)
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const newArr = []
// const missedArr = [3, 7, 9]

// for (let i = 0; i < numbers.length; i += 1) {
// 	if (!missedArr.includes(numbers[i])) {
// 		newArr.push(numbers[i])
// 		if (numbers[i] % 2 === 0) continue
// 		console.log('numbers', numbers[i])
// 	}
// 	console.log('Hello')
// }
// console.log(newArr)

_______________________________________________________________________________________________________________________________________
_______________________________________________________________________________________________________________________________________

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟰 - Масиви та цикли​⁡
// Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача.
// У змінних names та phones зберігаються рядки імен та телефонних номерів, розділені комами.
// Порядковий номер імен та телефонів у рядках вказують на відповідність.
// Кількість імен та телефонів гарантовано однакова.

// const names = 'Jacob,William,Solomon,Artemis'
// const phones = '89001234567,89001112233,890055566377,890055566300'

// const arrNames = names.split(',')
// const arrPhones = phones.split(',')

// for (let i = 0; i < arrNames.length; i++) {
// 	console.log(`${arrNames[i]}: ${arrPhones[i]}`)
// }

_______________________________________________________________________________________________________________________________________
_______________________________________________________________________________________________________________________________________

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟱 - Масиви та рядки​⁡
// Напиши скрипт, який виводить у консоль усі слова рядка крім першого і останнього.
// Результуючий рядок не повинен починатися або закінчуватися символ пробілу.
// Скрипт повинен працювати для будь-якого рядка.

// const string = 'Welcome to the future'

// const arr = string.split(' ')
// arr.pop()
// arr.shift()
// console.log('arr', arr)

_______________________________________________________________________________________________________________________________________
_______________________________________________________________________________________________________________________________________

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟲 - Масиви та рядки​⁡
// Напиши скрипт, який «розгортає» рядок (зворотній порядок букв) і виводить його в консоль.

// const string = 'Welcome to the future'
// const arr = string.split()

// const newArr = arr.reverse()
// console.log(newArr.join(''))

// for (let i = arr.length - 1; i >= 0; i -= 1) {
// 	newArr.push(arr[i])
// }
// console.log(newArr.join(''))
_______________________________________________________________________________________________________________________________________
_______________________________________________________________________________________________________________________________________

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟳 - Пошук елемента​⁡
// Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати для будь-якого
// масиву чисел.
// Використовуй цикл для розв'язання задачі.

// const numbers = [2, 17, 94, 1, 23, 37]
// // 2
// // 17<2
// // 2
// // 94<2
// // 2
// // 1<2
// // 1
// // 23<1
// // 1
// // 37<1
// // 1

// let min = numbers[0]
// let max = numbers[0]

// for (let i = 1; i < numbers.length; i++) {
// 	if (numbers[i] > max) max = numbers[i]
// 	if (numbers[i] < min) min = numbers[i]
// }
// console.log('min', min)
// console.log('max', max)

// ⁡⁢⁣⁣​‌‌‍‍Example 8 - Магазин​⁡
// Відправити суму проданих товарів кожного постачальника
// Всі товари по 20
// Закупівля по 10

// const startOrderPrice = 10

// const productFromFirst = [
// 	'тарілка',
// 	'ложка',
// 	'виделка',
// 	'стільчик',
// 	'стол',
// 	'ніж',
// 	'банка',
// 	'лопатка',
// ]
// const codeFromFirst = [
// 	'1234',
// 	'2345',
// 	'3456',
// 	'4567',
// 	'5678',
// 	'6789',
// 	'7890',
// 	'8901',
// ]

// const productFromSecond = [
// 	'рушник',
// 	'халат',
// 	'подушка',
// 	'простирадло',
// 	'лампа',
// 	'ліхтарик',
// 	'іграшка',
// 	'лялька',
// ]
// const codeFromSecond = [
// 	'12341',
// 	'23451',
// 	'34561',
// 	'45671',
// 	'56781',
// 	'67891',
// 	'78901',
// 	'89011',
// ]

// const cashRegister = [
// 	'45671',
// 	'56781',
// 	'67891',
// 	'6789',
// 	'7890',
// 	'8901',
// 	'78901',
// 	'89011',
// ]

// const showcase = productFromFirst.concat(productFromSecond)

// // 1 = showcase - cashRegister
// let counterFirst = 0
// let counterSecond = 0
// const arr = []
// const arr2 = []

// for (let i = 0; i < showcase.length; i++) {
// 	let index
// 	if (productFromFirst.includes(showcase[i])) {
// 		index = productFromFirst.indexOf(showcase[i])
// 		const value = codeFromFirst[index]
// 		if (cashRegister.includes(value)) {
// 			arr.push(...showcase.slice(i, i + 1))
// 			counterFirst++
// 		} else arr2.push(...showcase.slice(i, i + 1))
// 	} else if (productFromSecond.includes(showcase[i])) {
// 		index = productFromSecond.indexOf(showcase[i])
// 		const value = codeFromSecond[index]
// 		if (cashRegister.includes(value)) {
// 			arr.push(...showcase.slice(i, i + 1))
// 			counterSecond++
// 		} else arr2.push(...showcase.slice(i, i + 1))
// 	}
// }

// showcase.splice(0, showcase.length, ...arr2)

// // const newArr = showcase.filter((el) => {
// // 	return !arr.includes(el)
// // })
// // console.log('newArr', newArr)

// const totalCashForFirst = startOrderPrice * counterFirst
// const totalCashForSecond = startOrderPrice * counterSecond

// console.log('totalCashForFirst', totalCashForFirst)
// console.log('totalCashForSecond', totalCashForSecond)
// console.log('showcase', showcase)
