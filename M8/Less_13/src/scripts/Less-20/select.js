export const selectCountry = document.querySelector('#country')
export const selectCategory = document.querySelector('#category')

export const select = () => {
	let _country,
		_category = ''

	selectCategory.addEventListener('change', ({ target }) => {
		_category = target.value
	})

	selectCountry.addEventListener('change', ({ target }) => {
		_country = target.value
	})
	return {
		_country: _country || selectCategory.value,
		_category: _category || selectCountry.value,
	}
}
