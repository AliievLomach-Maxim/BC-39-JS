// // ⁡⁣⁣⁢​‌‍‌​‌‌‍‍ ‍Модуль 9. Заняття 𝟭8. Promise

// const promise = new Promise((resolve, reject) => {
// 	reject('Whoops')
// })
// promise.then((value) => {
// 	console.log('value', value)
// })
// .catch((err) => {
// 	console.log('err', err)
// })

// const promise = new Promise((ok, err) => {
// 	ok(11)
// })
// promise
// 	.then((value) => {
// 		new Promise((ok, error) => {
// 			if (value % 2 === 0) ok(value * 2)
// 			else error('Error!')
// 		})
// 	})
// 	.then((value) => {
// 		console.log('value', value)
// 	})
// 	.catch((error) => {
// 		console.error(error)
// 	})

// const makeGreeting = (guestName, onSuccess, onError) => {
// 	if (guestName === '' || guestName === undefined) {
// 		return onError('Guest name must not be empty')
// 	}
// 	onSuccess(`Welcome ${guestName}`)
// }

// makeGreeting(
// 	'Mango',
// 	(greeting) => console.log(greeting),
// 	(error) => console.error(error)
// )

// console.log('Start')
// console.log('Start1')
// console.log('Start2')

// const result = new Promise((resolve, reject) => {
// 	let item = 10
// 	for (let i = 0; i < 100000000; i++) {
// 		item += i
// 	}
// 	resolve(item)
// })

// result.then((value) => {
// 	console.log('value!!', value)
// })
// // console.log('result', result)
// console.log('End')
// let isLoading = false

// const makePromise = (text, delay, status) => {
// 	return new Promise((resolve, reject) => {
// 		if (status === 'resolve') setTimeout(() => resolve(text), delay)
// 		else reject('error!')
// 	})
// }
// const promiseA = makePromise('promiseA value', 1000, 'reject')
// isLoading = true
// promiseA
// 	.then()
// 	.catch()
// 	.finally(() => {
// 		isLoading = false
// 	})
// const promise2 = makePromise('promiseA value', 1000, 'reject')
// const promise3 = makePromise('promiseA value', 1000, 'reject')
// const promiseB = makePromise('promiseB value', 3000, 'reject')

// Promise.allSettled([promiseA, promiseB, promise2, promise3])
// 	.then((value) => console.log(value))
// 	.catch((error) => console.log(error))

// let usersArr = []

// const result = fetch('https://jsonplaceholder.typicode.com/users')

// result
// 	.then((jSon) => {
// 		return jSon.json()
// 	})
// 	.then((users) => {
// 		usersArr = users
// 		console.log('usersArr', usersArr)
// 	})
// 	.catch((error) => {
// 		console.log('error', error)
// 	})

// console.log('usersArr', usersArr)

// console.log('start') //1

// const fn = () => {
// 	new Promise((resolve, reject) => {
// 		console.log(1) //3
// 		resolve('success')
// 	})
// }

// console.log('middle') //2

// fn().then((res) => {
// 	console.log('res') //5
// })

// console.log('end') //4

// let users = []
// getUsers()

// const promise = new Promise((ok, err) => {
// 	ok(11)
// })
// promise
// 	.then((value) => {
// 		// new Promise((ok, error) => {
// 		// 	ok(value * 2)
// 		// })
// 		return (value += 2)
// 	})
// 	.then((value) => {
//         users.push(value)
// 	})
// 	.catch((error) => {
// 		console.error(error)
// 	})
