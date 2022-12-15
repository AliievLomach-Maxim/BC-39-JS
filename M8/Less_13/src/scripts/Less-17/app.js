// // ⁡⁣⁣⁢​‌‍‌​‌‌‍‍ ‍Модуль 9. Заняття 𝟭7. Asynchrony & Timers & Date
// const start = new Date()
// const end = new Date(2021)
// console.log('result', start - end)

// for (let i = 3; i > 0; i--) {
// 	const delay = i * 1000
// 	setTimeout(() => {
// 		console.log('i', i)
// 	}, 0)
// }

// const date = Date.now()
// console.log('date', date)

// const today = new Date()
// console.log('today', today.getTime())

// const x = setTimeout(() => {}, 5000)
// const y = setTimeout(() => {}, 2000)
// console.log('x', x, y)
// setTimeout(() => {
// 	console.log('setTimeout - 1')
// }, 3000)
// setTimeout(() => {
// 	console.log('setTimeout - 2')
// }, 2000)
// setTimeout(() => {
// 	console.log('setTimeout - 3')
// }, 500)
// for (let i = 0; i < 1000; i++) {
// 	console.log('i', i)
// }

// setTimeout(() => {
// 	console.log('TimeOut')
// }, 1000)
// function d(i) {
// 	console.log(i)
// }
// for (let i = 0; i < 10; i++) {
// 	d(i)
// }
// const date = new Date()
// console.log('date', date)
// console.log('date', date - 1)

// console.log('date', date.toDateString())

// 1 - встановити дедлайн
// 2 - дата старту
// 3 - різницю цих дат
// 4 - вивести на екран

// const deadline = new Date(2022, 11, 15, 12, 10)
// const daysEl = document.querySelector('.days')
// const hoursEl = document.querySelector('.hours')
// const minutesEl = document.querySelector('.minutes')
// const secondsEl = document.querySelector('.seconds')

// // const seconds = new Date(diff).getSeconds()
// setInterval(() => {
// 	const today = new Date()
// 	const diff = deadline - today

// 	if (diff <= 0) {
// 		stopTimer()
// 	} else {
// 		const seconds = Math.floor((diff / 1000) % 60)
// 		const minutes = Math.floor((diff / 1000 / 60) % 60)
// 		const hours = Math.floor((diff / 1000 / 60 / 60) % 24)
// 		const days = Math.floor(diff / 1000 / 60 / 60 / 24)
// 		// daysEl.textContent = days.toString().padStart(2, 0)
// 		daysEl.textContent = days < 10 ? `0${days}` : days
// 		hoursEl.textContent = hours < 10 ? `0${hours}` : hours
// 		minutesEl.textContent = minutes < 10 ? `0${minutes}` : minutes
// 		secondsEl.textContent = seconds < 10 ? `0${seconds}` : seconds
// 	}
// 	// secondsEl.textContent = seconds.toString().padStart(2, 0)
// }, 1000)

// function stopTimer() {
// 	clearInterval(1)
// }

////////

// const birthDay = new Date(1993, 10, 20)

// const daysEl = document.querySelector('.days')
// const hoursEl = document.querySelector('.hours')
// const minutesEl = document.querySelector('.minutes')
// const secondsEl = document.querySelector('.seconds')

// setInterval(() => {
// 	const today = new Date()
// 	const diff = today - birthDay

// 	const seconds = Math.floor((diff / 1000) % 60)
// 	const minutes = Math.floor((diff / 1000 / 60) % 60)
// 	const hours = Math.floor((diff / 1000 / 60 / 60) % 24)
// 	const days = Math.floor(diff / 1000 / 60 / 60 / 24)

// 	daysEl.textContent = days < 10 ? `0${days}` : days
// 	hoursEl.textContent = hours < 10 ? `0${hours}` : hours
// 	minutesEl.textContent = minutes < 10 ? `0${minutes}` : minutes
// 	secondsEl.textContent = seconds < 10 ? `0${seconds}` : seconds
// }, 1000)

// class tack {
// 	constructor() {
// 		console.log('tick')

// 		this.tack = function () {
// 			console.log('tack')
// 		}

// 		this.tick = function () {
// 			this.tack()
// 		}
// 	}
// }

// var tick = new tack()
// function fn(clb) {
// 	console.log('clb', this)
// 	clb()
// }
// fn(tick.tick)
// setTimeout(tick.tick, 10)

// const showThis = () => {
// 	console.log('this in showThis: ', this)
// }
// function showThis() {
// 	console.log('this in showThis: ', this)
// }

// showThis() // this in showThis: window

// const user = {
// 	username: 'Mango',
// }
// user.showContext = showThis

// user.showContext()
// let number = 10

// function fn(num) {
//     return number *= 2
// }
// fn()
// fn()

// function fn(number) {
// 	return function fn2(num) {
// 		return number * num
// 	}
// }

// const func = fn(a)

// console.log(func(20))
// console.log(func(30))
// console.log(func(40))
// console.log(func(50))

// const func2 = fn(20)

// console.log(func2(20))
// console.log(func2(30))
// console.log(func2(40))
// console.log(func2(50))

// console.log('fn', fn(10)(100))
