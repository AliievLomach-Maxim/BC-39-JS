// localStorage.setItem('name', 'Alex')
// // const getLocal = localStorage.getItem('name')
// // console.log('getLocal', getLocal)
// // localStorage.removeItem('name')
// localStorage.setItem('name2', 'Alex')
// localStorage.setItem('name3', 'Alex')
// localStorage.clear()

// sessionStorage.setItem('name', 'Alex')
// const getLocal = sessionStorage.getItem('name')
// console.log('getLocal', getLocal)
// // sessionStorage.removeItem('name')
// // sessionStorage.setItem('name2', 'Alex')
// // sessionStorage.setItem('name3', 'Alex')
// // sessionStorage.clear()

// const clearBtn = document.querySelector('.clear')
// clearBtn.addEventListener('click', () => {
// 	localStorage.clear()
// })

// const form = document.querySelector('form')
// const arr = Array.from(form.children)

// const inputName = arr.find((el) => {
// 	return el.name === 'name'
// })
// inputName.value = localStorage.getItem('name')
// 	? localStorage.getItem('name')
// 	: ''

// const inputPass = arr.find((el) => {
// 	return el.name === 'pass'
// })
// inputPass.value = localStorage.getItem('pass')
// 	? localStorage.getItem('pass')
// 	: ''

// form.addEventListener('input', handleInput)

// function handleInput(ev) {
// 	ev.preventDefault()
// 	// const passValue = ev.target.elements.pass.value
// 	// const nameValue = ev.target.elements.name.value
// 	console.log('ev.currentTarget>>', ev.currentTarget)
// 	console.log('ev.target>>', ev.target)
// 	// const { name, pass } = ev.target.elements
// 	// localStorage.setItem('name', name.value)
// 	// localStorage.setItem('pass', pass.value)
// }

// ////////////

const clearBtn = document.querySelector('.clear')
clearBtn.addEventListener('click', () => {
	localStorage.clear()
})

const form = document.querySelector('form')
const arr = Array.from(form.children)

const inputName = arr.find((el) => {
	return el.name === 'name'
})

inputName.value = localStorage.getItem('data')
	? JSON.parse(localStorage.getItem('data'))[0]
	: ''

const inputPass = arr.find((el) => {
	return el.name === 'pass'
})
inputPass.value = localStorage.getItem('data')
	? JSON.parse(localStorage.getItem('data'))[1]
	: ''

form.addEventListener('submit', handleInput)

function handleInput(ev) {
	ev.preventDefault()
	const { name, pass } = ev.target.elements
	const arrValue = []
	arrValue.push(name.value, pass.value)
	const jsonArr = JSON.stringify(arrValue)
	localStorage.setItem('data', jsonArr)
}
