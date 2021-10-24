const accordeonElements = () =>{

	const accordeon = document.querySelector('.accordeon'),
		accordEl = accordeon.querySelectorAll('.element'),
		elementContent = accordeon.querySelectorAll('.element-content');

	const elementToogle = (index) =>{
		for(let i =0; i < elementContent.length; i++){

			if(index === i){
				accordEl[i].classList.add('active');
				elementContent[i].style.display = 'block';
			}else{
				accordEl[i].classList.remove('active');
				elementContent[i].style.display = 'none';
			}
		}
	};

	accordeon.addEventListener('click', (event) =>{
		let target = event.target;
			target = target.closest('.element');
		
		if(target){
			accordEl.forEach((item, i) =>{
				if(item === target){
					elementToogle(i);
				}
			});
		}
	});
};

export default accordeonElements;