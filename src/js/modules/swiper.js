import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'

const swiper = new Swiper('.swiper', {
	loop: true,
	slidesPerView: 4,
	spaceBetween: 42,
	freeMode: true,
	// speed: 1000,

	// breakpoints: {
	// 	640: {
	// 		slidesPerView: 2,
	// 		spaceBetween: 20,
	// 	},
	// 	768: {
	// 		slidesPerView: 4,
	// 		spaceBetween: 40,
	// 	},
	// 	1024: {
	// 		slidesPerView: 5,
	// 		spaceBetween: 50,
	// 	},
	// },

	navigation: {
		nextEl: '#sliderNext',
		prevEl: '#sliderPrev',
	},
})

export default swiper = swiper;
