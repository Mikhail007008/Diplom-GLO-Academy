const comeModal = () =>{
	const modalCallback = document.querySelector('.modal-callback'),
		callbackBtn = document.querySelectorAll('.callback-btn'),
		modalOverlay = document.querySelector('.modal-overlay');

	document.addEventListener('click', (event) =>{
		let target = event.target;

		callbackBtn.forEach((el) =>{
			if(target === el){
				modalOverlay.style.display = 'block';
				modalCallback.style.display = 'block';
			}
		});

		if(target.closest('.modal-close') || target.closest('.modal-overlay')){
			modalOverlay.style.display = 'none';
			modalCallback.style.display = 'none';
		}
	});
};

export default comeModal;