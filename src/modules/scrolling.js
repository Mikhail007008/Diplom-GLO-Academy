const scrolling = () =>{
	const menu = document.querySelector('.top-menu'),
		menuItems = menu.querySelectorAll('li>a'),
		btnUp = document.querySelector('.up');

	btnUp.style.visibility = 'hidden';

	document.addEventListener('scroll', ()=>{
		let scrollValue = window.scrollY;
		
		if(scrollValue > 600){
			btnUp.style.visibility = 'visible';
		}else{
			btnUp.style.visibility = 'hidden';
		}
	
	});

	const scrolTo = (element) => {
		window.scroll({
			left: 0,
			top: element.offsetTop,
			behavior: 'smooth'
		});
	};

	document.addEventListener('click', (event) =>{
		let target = event.target;

		if(btnUp === target){
			scrolTo(menu);
		}

		menuItems.forEach((item) =>{
			if(item === target){
				event.preventDefault();
				let nameToScroll = item.getAttribute('href');
				scrolTo(document.querySelector(nameToScroll));
			}
		});
	});
};

export default scrolling;