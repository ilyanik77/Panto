function sortByTabs() {
	const tabsBtns = document.querySelectorAll('[data-tab]')
	const tabProducts = document.querySelectorAll('[data-tab-value]')

    // здесь должна быть функция сортировки массива
	for (const btn of tabsBtns) {
		btn.addEventListener('click', function () {
			for (const btn of tabsBtns) {
				btn.classList.remove('tab-controls__btn--active')
			}

			this.classList.add('tab-controls__btn--active')

			console.log(this.dataset.tab)
			for (const product of tabProducts) {
				if (this.dataset.tab === 'all') {
					product.classList.remove('none')
				}
                else if (product.dataset.tabValue === this.dataset.tab) {
					product.classList.remove('none')
				} 
                else {
					product.classList.add('none')
				}
			}
		})
	}
}

export default sortByTabs = sortByTabs
