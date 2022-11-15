// ⁡⁣⁣⁢​‌‌‍Модуль 𝟯. Заняття 5. Об'єкти​⁡

let _______________________________________________________________________________________________________________________________________
_______________________________________________________________________________________________________________________________________

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟭 - Основи об'єктів​⁡
// Напиши скрипт, який для об'єкта user, послідовно:

// додає поле mood зі значенням 'happy' +++
// замінює значення hobby на 'skydiving' +++
// замінює значення premium на false +++
// виводить вміст об'єкта user у форматі ключ:значення використовуючи
// Object.keys() та for...of

// const user = {
// 	name: 'Mango',
// 	age: 20,
// 	hobby: 'html',
// 	premium: true,
// }

// user.mood = 'happy'
// user.hobby = 'skydiving'
// user.premium = false

// // const x = 'name'
// // user[x] //mango
// // user.name //mango

// const userKeys = Object.keys(user)
// for (const key of userKeys) {
// 	console.log(`${key}:${user[key]}`)
// }

// console.log('user', user)

_______________________________________________________________________________________________________________________________________
_______________________________________________________________________________________________________________________________________

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟮 - метод Object.values()​⁡
// У нас є об'єкт, де зберігаються зарплати нашої команди.
// Напишіть код для підсумовування всіх зарплат і збережіть результат у змінній sum.
// Повинно вийти 390. Якщо об'єкт salaries порожній, то результат має бути 0.

// const salaries = {
// 	John: 100,
// 	Ann: 160,
// 	Pete: 130,
// }

// // 1 - дістати значення ключів за допомогую Object.values()
// // 2 - просумувати усі значення масиву

// const valuesSalar = Object.values(salaries)
// let sum = 0
// for (const value of valuesSalar) {
// 	sum += value
// }
// console.log('sum', sum)

_______________________________________________________________________________________________________________________________________
_______________________________________________________________________________________________________________________________________

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 3 - Масив об'єктів​⁡
// Напишіть функцію calcTotalPrice(stones, stoneName), яка приймає масив об'єктів
// та рядок з назвою каменю. Функція рахує і повертає загальну вартість каміння
// з таким ім'ям, ціною та кількістю з об'єкта

// const stones = [
// 	{ name: 'Смарагд', price: 1300, quantity: 4 },
// 	{ name: 'Діамант', price: 2700, quantity: 3 },
// 	{ name: 'Сапфір', price: 400, quantity: 7 },
// 	{ name: 'Щебінь', price: 200, quantity: 2 },
// ]
// // 1 - створити ф-ю
// // 2 - перебрати масив
// // 3 - знайти об'єкт зи значенням name:'stoneName'
// // 4 - якщо ел знайдено, то перемножити price та quantity та повернути результат

// const calcTotalPrice = function (stones, stoneName) {
// 	let total = 0
// 	for (const obj of stones) {
// 		if (obj.name === stoneName) {
// 			total = obj.price * obj.quantity
// 		}
// 	}
// 	return total
// }

// console.log(calcTotalPrice(stones, ''))

_______________________________________________________________________________________________________________________________________
_______________________________________________________________________________________________________________________________________

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟰 - Комплексні завдання​⁡
// Напиши скрипт управління особистим кабінетом інтернет банку.
// Є об'єкт account в якому необхідно реалізувати методи для роботи з балансом
// та історією транзакцій.

// /*
//  * Типів транзакцій всього два.
//  * Можна покласти чи зняти гроші з рахунку.
//  */
// const Transaction = {
// 	DEPOSIT: 'deposit',
// 	WITHDRAW: 'withdraw',
// }

// /*
//  * Кожна транзакція це об'єкт із властивостями: id, type та amount
//  */
// const account = {
// 	// Поточний баланс рахунку
// 	balance: 0,

// 	// Історія транзакцій
// 	historyTransactions: [],

// 	/*
// 	 * Метод створює та повертає об'єкт транзакції.
// 	 * Приймає суму та тип транзакції.
// 	 */
// 	createTransaction(amount, type) {
// 		const transaction = {
// 			amount,
// 			type,
// 			id: this.historyTransactions.length,
// 		}
// 		return transaction
// 	},

// 	/*
// 	 * Метод, що відповідає за додавання суми до балансу.
// 	 * Приймає суму транзакції.
// 	 * Викликає createTransaction для створення об'єкта транзакції
// 	 * після чого додає його до історії транзакцій
// 	 */
// 	deposit(amount) {
// 		const operation = this.createTransaction(amount, Transaction.DEPOSIT)
// 		this.historyTransactions.push(operation)
// 		this.balance += amount
// 	},

// 	/*
// 	 * Метод, що відповідає за зняття суми з балансу.
// 	 * Приймає суму транзакції.
// 	 * Викликає createTransaction для створення об'єкта транзакції
// 	 * після чого додає його до історії транзакцій.
// 	 *
// 	 * Якщо amount більше ніж поточний баланс, виводь повідомлення
// 	 * про те, що зняття такої суми не можливе, недостатньо коштів.
// 	 */
// 	withdraw(amount) {
// 		if (amount <= account.balance) {
// 			const operation = account.createTransaction(amount, Transaction.WITHDRAW)
// 			account.historyTransactions.push(operation)
// 			account.balance -= amount
// 		} else alert('Недостатньо коштів')
// 	},

// 	/*
// 	 * Метод повертає поточний баланс
// 	 */
// 	getBalance() {
// 		return account.balance
// 	},

// 	/*
// 	 * Метод шукає та повертає об'єкт транзакції з історії транзакцій по id
// 	 */
// 	getTransactionDetails(id) {
// 		for (const objHistory of account.historyTransactions) {
// 			if (id === objHistory.id) return objHistory
// 		}
// 	},

// 	/*
// 	 * Метод повертає кількість коштів
// 	 * певного типу транзакції з усієї історії транзакцій
// 	 */
// 	getTransactionTotal(typeTransaction) {
// 		let total = 0
// 		for (const objHistory of account.historyTransactions) {
// 			if (typeTransaction === objHistory.type) {
// 				total += objHistory.amount
// 			}
// 		}
// 		return total
// 	},
// }

// // account.deposit(500)
// // account.deposit(500)
// // account.deposit(500)
// // account.deposit(500)
// // account.withdraw(200)
// // account.withdraw(20000)
// // console.log('History:', account.historyTransactions)
// // console.log('TransactionDetails id=2:', account.getTransactionDetails(2))
// // console.log('TransactionDetails id=3:', account.getTransactionDetails(3))
// // console.log(
// // 	'TransactionTotalDEPOSIT:',
// // 	account.getTransactionTotal(Transaction.DEPOSIT)
// // )
// // console.log(
// // 	'TransactionTotalWITHDRAW:',
// // 	account.getTransactionTotal(Transaction.WITHDRAW)
// // )
// // console.log('Balance:', account.getBalance())

// const card1 = Object.create(account)
// const card2 = Object.create(account)

// const card3 = Object.create(account)

// // account.deposit(300)

// card1.deposit(100)
// card2.deposit(300)
// card3.deposit(200)

// console.log('account', account.balance)

// console.log('card1', card1.balance)

// console.log('card2', card2.balance)
// console.log('card3', card3.balance)
