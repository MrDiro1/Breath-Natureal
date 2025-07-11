class Header {
	selectors = {
		root: '[data-js-header]',
		overlay: '[data-js-header-overlay]',
		burgerButton: '[data-js-header-burger-button]',
		headerMenuAccent: '[data-js-header-menu-accent]',
	}

	stateClasses = {
		isActive: 'is-active',
		isLock: 'is-lock',
	}

	constructor() {
		this.rootElement = document.querySelector(this.selectors.root)
		this.overlayElement = this.rootElement.querySelector(this.selectors.overlay)
		this.burgerButtonElement = this.rootElement.querySelector(
			this.selectors.burgerButton
		)
		this.headerMenuAccent = this.rootElement.querySelector(
			this.selectors.headerMenuAccent
		)
		this.bindEvents()
	}

	onBurgerButtonClick = () => {
		this.burgerButtonElement.classList.toggle(this.stateClasses.isActive)
		this.overlayElement.classList.toggle(this.stateClasses.isActive)
		this.headerMenuAccent.classList.toggle(this.stateClasses.isActive)
		document.documentElement.classList.toggle(this.stateClasses.isLock)
	}

	bindEvents() {
		this.burgerButtonElement.addEventListener('click', this.onBurgerButtonClick)
	}
}

export default Header
