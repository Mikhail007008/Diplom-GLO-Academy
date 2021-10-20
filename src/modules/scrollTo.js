const scrolling = () =>{
	const menu = document.querySelector('.top-menu'),
	menuItems = menu.querySelectorAll('li>a');

	const scrolTo = (element) => {
		window.scroll({
			left: 0,
			top: element.offsetTop,
			behavior: 'smooth'
		});
	};

	document.addEventListener('click', (event) =>{
		let target = event.target;

		menuItems.forEach((item) =>{
			event.preventDefault();

			if(item === target){
				let nameToScroll = item.getAttribute('href');
				scrolTo(document.querySelector(nameToScroll));
			}
		});
	});
};


export default scrolling;