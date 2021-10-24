const slider = () =>{
	const slide = document.querySelectorAll('.item'),
		sliderTable = document.querySelectorAll('.table');

	let currentSlide = 0,
		interval;

	sliderTable.forEach((el) =>{
		el.style = `
		opacity: 0.9;
		visibility: visible;`;
	});

	const prev = (elem, index) =>{elem[index].style.display = 'none';};

	const next = (elem, index) =>{elem[index].style.display = 'block';};

	const autoPlay = () =>{
		prev(slide, currentSlide);
		currentSlide++;
		if(currentSlide >= slide.length){
			currentSlide = 0;
		}
		next(slide, currentSlide);
	};

	const startSlide = (time = 3000) =>{
		interval = setInterval(autoPlay, time);
	};

	startSlide();
};

export default slider;


