// ⁡⁣⁣⁢​‌‌‍Модуль 6. Заняття 11. ​‌‍‌𝗗𝗢𝗠⁡​

// https://codesandbox.io/s/tribute-page-8rw5u?file=/style.css:0-2537

// getElementById
// getElementsByClassName
// getElementByTagName
// querySelector
// querySelectorAll

// // const elem = document.querySelector('body').firstElementChild
// const elem = document.querySelector('.main')
// const header = elem.querySelector('.header')

// console.log('elem', elem)

// textContent
// innerHTML
// children
// style

// createElement
// append & prepend

// insertAdjacent

// classList(add, remove, toggle)

// hasAttribute
// getAttribute
// removeAttribute
// setAttribute

// getElem
const main = document.querySelector('#main')

//creteEl
const h1Elem = document.createElement('h1')
const figure = document.createElement('figure')
const image = document.createElement('img')
const figcap = document.createElement('figcaption')

//addAttr
h1Elem.id = 'title'
h1Elem.textContent = '- Michel Legrand -'
h1Elem.style.color = 'red'

figure.id = 'img-div'

image.id = 'image'
image.src =
	'https://i.guim.co.uk/img/media/fe60403609f352eb543d592eb0dce63cd96e94b4/0_36_5836_3503/master/5836.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=1580030b026029d3c5c67a20b3c5b35f'

figcap.id = 'img-caption'
figcap.textContent = 'Michel Legrand conducting his orcherstra.'
figcap.setAttribute('atr', 'user')

//addInDOM
main.append(h1Elem)
main.append(figure)

figure.append(image)
figure.append(figcap)

main.insertAdjacentHTML(
	'beforeend',
	`<article id="tribute-info">
				<div id="intro">
					<p>
						&bull; Michel Legrand (1932 - 2019) was a famous French musician.
						&bull;
					</p>
				</div>
				<p><u>Here are some major facts about him:</u></p>
				<p></p>
				<ul>
					
				</ul>

				<blockquote id="quote">
					<p>
						Writing is a mental thing, while playing is essentially a physical
						feeling.
					</p>
					<cite>-- Michel Legrand</cite>
				</blockquote>
				<hr />
				<p>
					To find out more about him, feel free to have a look at his biography
					on
					<a
						id="tribute-link"
						href="https://en.wikipedia.org/wiki/Michel_Legrand"
						target="_blank"
						>Wikipedia</a
					>.
				</p>
			</article>`
)

const items = [
	'He was born in Paris, France on February 24<sup>th</sup>, 1932.',
	'His father was himself a conductor and composer, and his mother, who was Armenian, was the sister of a conductor.',
	'His sister was a Soprano and a member of the Swingle Singers.',
	'Along his career, he composed more than two hundred film and television scores.',
	'He was also a Jazz player and worked with giants like Miles Davis or Stan Getz.',
]

// const arrLi = items.map((el) => `<li>${el}</li>`).join('')
// const arrLi = items.reduce((acc, el) => acc + `<li>${el}</li>`, '')

// const ul = main.querySelector('ul')
// ul.insertAdjacentHTML('beforeend', arrLi)

//use function

const createLiEl = (arr) => arr.reduce((acc, el) => acc + `<li>${el}</li>`, '')

const ul = main.querySelector('ul')
ul.insertAdjacentHTML('beforeend', createLiEl(items))

// const arrLi = items.map((el) => {
// 	const li = document.createElement('li')
// 	li.textContent = el
// 	return li
// })

// const ul = main.querySelector('ul')
// ul.append(...arrLi)

const items2 = [
	'He was born ',
	'His father was himself a conductor and composer',
	'His sister was a Soprano and a member of the Swingle Singers.',
	'Along his career',
	'He was also a Jazz player ',
]

ul.insertAdjacentHTML('beforeend', createLiEl(items2))

if (figcap.hasAttribute('atr')) {
	figcap.style.color = 'red'
}
