import { optionCategory, optionCountry } from './data'
import { selectCategory, selectCountry } from './select'

const ul = document.querySelector('.list')

const createOption = (arr) =>
	arr.reduce((acc, el) => acc + `<option value=${el}>${el}</option>`, '')

const addToSelect = (elDom, arr) => {
	elDom.insertAdjacentHTML('afterbegin', createOption(arr))
}

const createLiElement = ({ urlToImage, title, description, url, author }) => `
<li>
${urlToImage ? `<img src=${urlToImage}>` : ''}
<p>${title}</p>
${description ? `<p>${description}</p>` : ''}
${author ? `<p>${author}</p>` : ''}
<a href=${url}>Go to post</a>
</li>
`

const createListNews = (array) =>
	array.reduce((acc, el) => acc + createLiElement(el), '')

addToSelect(selectCountry, optionCountry)
addToSelect(selectCategory, optionCategory)

export const addToUl = ({ articles }) => {
	ul.innerHTML = ''
	ul.insertAdjacentHTML('afterbegin', createListNews(articles))
}
