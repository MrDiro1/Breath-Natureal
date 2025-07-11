class Search {
	selectors = {
		root: '[data-js-header]',
		searchButton: '[data-js-header-search-button]',
		searchForm: '[data-js-header-search-form]',
		searchError: '[data-js-search-error]',
		searchInput: '[data-js-search-input]',
	}

	stateClasses = {
		isVisible: 'is-visible',
	}

	constructor() {
		this.rootElement = document.querySelector(this.selectors.root)
		this.searchButtonElement = this.rootElement.querySelector(
			this.selectors.searchButton
		)
		this.searchFormElement = this.rootElement.querySelector(
			this.selectors.searchForm
		)
		this.errorElement = this.rootElement.querySelector(
			this.selectors.searchError
		)
		this.searchInputElement = this.rootElement.querySelector(
			this.selectors.searchInput
		)
		this.onSubmitSearchForm()
		this.bindEvents()
	}

	onSearchButtonClick = () => {
		this.searchFormElement.classList.toggle(this.stateClasses.isVisible)
	}

	showSearchError = () => {
		this.errorElement.classList.remove('visually-hidden')
	}

	hideSearchError = () => {
		this.errorElement.classList.add('visually-hidden')
	}

	onSubmitSearchForm() {
		this.searchFormElement.addEventListener('submit', e => {
			e.preventDefault()

			this.showSearchError()
		})

		this.searchInputElement.addEventListener('input', () => {
			this.hideSearchError()
		})
	}

	onDocumentClick = event => {
		if (
			!this.searchFormElement.contains(event.target) &&
			!this.searchButtonElement.contains(event.target)
		) {
			this.hideSearchError()
		}
	}

	bindEvents() {
		this.searchButtonElement.addEventListener('click', this.onSearchButtonClick)
		document.addEventListener('click', this.onDocumentClick)
	}
}

export default Search
