// ⁡⁣⁣⁢​‌‍‌​‌‌‍‍ ‍Модуль 𝟳. Заняття 𝟭4.  throttle/debounce & lazy-loading

// console.log('first', _.add(1, 2))

// document.addEventListener(
// 	'scroll',
// 	_.debounce(() => {
// 		console.log('scroll')
// 	}, 1000)
// )

// const body = document.querySelector('body')

// document.addEventListener(
// 	'scroll',
// 	_.debounce(() => {
// 		console.log('first')
// 		const randomColor = `#${Math.random().toString(16).slice(2, 8)}`
// 		body.style.backgroundColor = randomColor
// 	}, 300)
// )

// document.addEventListener(
// 	'scroll',
// 	_.throttle(() => {
// 		const randomColor = `#${Math.random().toString(16).slice(2, 8)}`
// 		body.style.backgroundColor = randomColor
// 	}, 1000)
// )

const main = document.querySelector('.main')

// const randomImg = Math.random().toString().slice(2, 5)

// const img = document.createElement('img')
// img.dataset.src = `https://picsum.photos/id/40/800`
// img.className = 'lazyload'
// img.alt = 'Image Random'
// main.prepend(img)

const randomNumber = (Math.random() * 10).toFixed(0)

const imgArr = []

for (let i = 0; i < randomNumber; i++) {
	let randomImg = Math.random().toString().slice(2, 5)

	if (randomImg[0] === '0') {
		randomImg = randomImg.slice(1)
	}
	const img = document.createElement('img')
	img.dataset.src = `https://picsum.photos/id/${randomImg}/800`
	img.className = 'lazyload'
	img.alt = 'Image Random'
	imgArr.push(img)
}

main.append(...imgArr)
