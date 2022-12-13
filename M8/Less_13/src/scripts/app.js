// ⁡⁣⁣⁢​‌‍‌​‌‌‍‍ ‍Модуль 8. Заняття 𝟭5. Webpack
import arrForEach from './arrForEach'

const divRow = document.querySelector('.row')
const arrCard = Array.from(divRow.children)

arrForEach(arrCard)

const arr = [1, 2]

function ArrClo() {
	if (Array.isArray(arr))
		arr.map((el) => {
			console.log('el', el)
		})
	else if (typeof arr === 'number') console.log('arr+2', arr + 2)
}
