'use strict';

const section = document.querySelector('.services-section'),
	btnUp = document.querySelector('.up');

btnUp.style.visibility = 'hidden';

// const scrolTo = () => {
// 	window.scroll({
// 		top: 0,
// 		behavior: 'smooth'
// 	});
// };


document.addEventListener('scroll', ()=>{
	let scr = window.scrollY;
	console.log(scr);
	
	if(scr > 600){
		btnUp.style.visibility = 'visible';
	}else{
		btnUp.style.visibility = 'hidden';
	}

});

// btnUp.addEventListener('click', ()=>{
// 	scrolTo();
// });

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

		if(btnUp === target){
			scrolTo(menu);
		}

		menuItems.forEach((item) =>{
			event.preventDefault();

			if(item === target){
				let nameToScroll = item.getAttribute('href');
				scrolTo(document.querySelector(nameToScroll));
			}
		});
	});


