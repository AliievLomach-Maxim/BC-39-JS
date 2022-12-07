// ⁡⁣⁣⁢​‌‌‍Модуль 6. Заняття 12. ​‌‍‌𝗗𝗢𝗠⁡​

// Form
// submit
// preventDefault

// keydown

// addEventListener('mousemove', (event) => {
// 	console.log(event.screenX, event.screenY)
// })

// const form = document.querySelector('.form')
// form.addEventListener('submit', (event) => {
// 	event.preventDefault()
// 	console.log(event)
// 	// showValue(ev.target[0].value)
// })

// function showValue(value) {
// 	alert(value)
// }

// const btn = document.querySelector('.btn')
// btn.addEventListener('click', ({target}) => {
// 	console.log('target', target)
// })

// Modal
// 1 - Show modal when dom content loaded
// 2 - hide modal when click close btn

// const overlay = document.querySelector('.overlay')
// const btn = document.querySelector('.close')
// const showModalBtn = document.querySelector('.showModalBtn')
// // const showModal = () => {
// // 	overlay.classList.remove('hide')
// // }

// // const hideModal = () => {
// // 	overlay.classList.add('hide')
// // }

// // addEventListener('DOMContentLoaded', showModal)

// const toggleModal = () => {
// 	overlay.classList.toggle('hide')
// }
// addEventListener('DOMContentLoaded', toggleModal)

// btn.addEventListener('click', toggleModal)
// showModalBtn.addEventListener('click', toggleModal)

const form = document.querySelector('.form')
const ul = document.createElement('ul')
form.insertAdjacentElement('afterend', ul)

form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
	event.preventDefault()
	checkDublicate(event)
}

function createTask(event) {
	const li = document.createElement('li')
	li.textContent = event.target[0].value
	ul.append(li)
	clearInput(event)
}

function checkDublicate(event) {
	if (ul.children.length > 0) {
		const arr = [...ul.children]
		const isDuplicate = arr.find((li) => {
			return li.textContent === event.target[0].value
		})
		isDuplicate ? alert('Така задача вже існує') : createTask(event)
	} else createTask(event)
}

function clearInput(event) {
	event.currentTarget.reset()
}
