import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'

const swiper = new Swiper('.swiper', {
	loop: true,
	slidesPerView: 4,
	spaceBetween: 42,
	freeMode: true,
	// speed: 1000,

	navigation: {
		nextEl: '#sliderNext',
		prevEl: '#sliderPrev',
	},
})

export default swiper = swiper;
