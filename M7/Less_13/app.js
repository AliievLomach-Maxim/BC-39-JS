// ⁡⁣⁣⁢​‌‍‌​‌‌‍‍ ‍Модуль 𝟳. Заняття 𝟭𝟯. 𝗕𝘂𝗯𝗯𝗹𝗶𝗻𝗴

// const div1 = document.querySelector('.div1')
// const div2 = document.querySelector('.div2')
// const btn = document.querySelector('button')

// div1.addEventListener('click', () => {
// 	console.log('Div1')
// })

// div2.addEventListener('click', (ev) => {
// 	console.log('Div2')
// })

// const arrBtn = Array.from(div2.children)
// arrBtn.forEach((el) => {
// 	el.addEventListener('click', (ev) => {
// 		console.log('ev.target', ev.target)
// 	})
// })

const divRow = document.querySelector('.row')
const arrCard = Array.from(divRow.children)

arrCard.forEach((el) => {
	el.addEventListener('click', ({ target }) => {
		console.log('target.classList', target.classList)
		if (Array.from(target.classList)[0].includes('card'))
			alert('Click on CARD!')
		else console.log('Click on', target)
	})
})

const arr = [1, 2]
if (Array.isArray(arr))
	arr.map((el) => {
		console.log('el', el)
	})
else if (typeof arr === 'number') console.log('arr+2', arr + 2)
