const scrolling = () =>{
	const menu = document.querySelector('.top-menu'),
		menuItems = menu.querySelectorAll('li>a'),
		mobMenu = document.querySelector('.mobile-menu'),
		mobMenuItems = mobMenu.querySelectorAll('li>a'),
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

	const activeMenu = () =>{
		mobMenu.classList.toggle('active-menu');
	};

	const scrollMenu = (item, event) =>{
		event.preventDefault();
		let nameToScroll = item.getAttribute('href');
		scrolTo(document.querySelector(nameToScroll));
	};

	document.addEventListener('click', (event) =>{
		let target = event.target;

		menuItems.forEach((item) =>{
			if(item === target){
				scrollMenu(item, event);
			}
		});

		if(target === event.target.closest('.mobBtn') || 
		target === event.target.closest('.mobile-menu-close') ||
		target === event.target.closest('.callback-mobile')){
			activeMenu();
		}

		mobMenuItems.forEach((item) =>{
			if(item === target){
				scrollMenu(item, event);
				activeMenu();
			}
		});

		if(btnUp === target){
			scrolTo(menu);
		}
	});
};

export default scrolling;