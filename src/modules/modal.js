const comeModal = () =>{
	const modalCallback = document.querySelector('.modal-callback'),
		callbackBtn = document.querySelectorAll('.callback-btn'),
		modalOverlay = document.querySelector('.modal-overlay'),
		ourServicesBtn = document.querySelectorAll('.absolute'),
		allImg = document.querySelectorAll('.img-wrapper');

	const modalOn = () =>{
		modalOverlay.style.display = 'block';
		modalCallback.style.display = 'block';
	};

	const modalOff = () =>{
		modalOverlay.style.display = 'none';
		modalCallback.style.display = 'none';
	};

	document.addEventListener('click', (event) =>{
		let target = event.target,
			foo = target.closest('.element');

		callbackBtn.forEach((el) =>{
			if(target === el){
				modalOn();
			}
		});

		ourServicesBtn.forEach((el) =>{
			if(target === el){
				modalOn();
			}
		});

		if(foo){
			allImg.forEach((el) =>{
				if(el === target){
					modalOn();
				}
			});
		}

		if(target.closest('.button-services')){
			modalOn();
		}

		if(target.closest('.modal-close') || target.closest('.modal-overlay')){
			modalOff();
		}
	});
};
export default comeModal;