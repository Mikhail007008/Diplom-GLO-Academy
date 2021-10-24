const sendForm = () =>{

	const modal = document.querySelector('.modal-callback'),
		inputs = modal.querySelectorAll('input'),
		style = document.createElement('style'),
		statusMessage = document.createElement('div'),
		
		errorMessage = 'Ошибка',
		loadMessage = 'Идёт отправка',
		succesMessage = 'Отправлено!';

	statusMessage.style.cssText = `font-size: 2rem; color: #000; text-align: center; font-family: Helios;
		font-weight: bold;
	}`; 
	style.textContent = `
		input.success {
			border: 2px solid green
		}
		input.error {
			border: 2px solid red
		}
		.validator-error {
			font-size: 12px;
			font-family: sans-serif;
			color: red;
			margin-top: -15px;
	}`;
	document.head.appendChild(style);

	const validator = (elem) =>{
		const showError = (elem) =>{
			elem.classList.remove('success');
			elem.classList.add('error');

			if(elem.nextElementSibling && elem.nextElementSibling.classList.contains('validator-error')){return;}

			const errorDiv = document.createElement('div');
			errorDiv.textContent = 'Ошибка в этом поле';
			errorDiv.classList.add('validator-error');
			elem.insertAdjacentElement('afterEnd', errorDiv);
		};

		const showSuccess = (elem) =>{
			elem.classList.remove('error');
			elem.classList.add('success');
				if(elem.nextElementSibling && elem.nextElementSibling.classList.contains('validator-error')){
					elem.nextElementSibling.remove('validator-error');}
		};

		const patternPhone = /([0-9\+\(\)\- ]){18}/,
			patternFio = /[а-яА-Я ]/;

			if(elem.getAttribute('name') === 'tel'){
				if(!elem.value || !patternPhone.test(elem.value)){
					showError(elem);
				}else{showSuccess(elem);}
			}else if(elem.getAttribute('name') === 'fio'){
				if(!elem.value || !patternFio.test(elem.value)){
					showError(elem);
				}else{showSuccess(elem);}
			}
	};

	inputs.forEach(elem => elem.addEventListener('input', ()=> validator(elem)));

	window.addEventListener("DOMContentLoaded", () =>{
		const setCursorPosition = (pos, elem) =>{
			elem.focus();
			if (elem.setSelectionRange){elem.setSelectionRange(pos, pos);}
			else if (elem.createTextRange){
				const range = elem.createTextRange();
				range.collapse(true);
				range.moveEnd("character", pos);
				range.moveStart("character", pos);
				range.select();
			}
		};
		
		function mask (event){
			let matrix = "+7 (___) ___-__-__",
				i = 0,
				def = matrix.replace(/\D/g, ""),
				val = this.value.replace(/\D/g, "");
			if (def.length >= val.length){val = def;}
			this.value = matrix.replace(/./g, function(a){
				return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a;
			});
			if (event.type === "blur"){
				if (this.value.length === 2) {this.value = "";}
			} else {setCursorPosition(this.value.length, this);}
		}
			const input = document.querySelector(".tel");
			input.addEventListener("input", mask);
			input.addEventListener("focus", mask);
			input.addEventListener("blur", mask);
		});

	modal.addEventListener('submit', (event) =>{
		let target = event.target;			

		if(target.matches('form') && !document.querySelector('.validator-error')){
			event.preventDefault();

			target.appendChild(statusMessage);
			statusMessage.textContent = loadMessage;

			const formData = new FormData(target);
			let body = {};

			formData.forEach((val, key) => body[key] = val);
			
			postData(body)
				.then((response) =>{
					if(response.status === 200){
						statusMessage.textContent = succesMessage;
						setTimeout(()=>{
							statusMessage.textContent = '';
							document.querySelector('.modal-overlay').style.display = 'none';
							document.querySelector('.modal-callback').style.display = 'none';
						}, 3000);
						inputs.forEach((elem) =>{
							if(elem.getAttribute('name')){
								elem.value = '';
								elem.classList.remove('success');
							}
						});
					}else{throw new Error('status network not 200');}
				})
				.catch((error) =>{
					statusMessage.textContent = errorMessage;
					console.error(error);
				});
		} else{event.preventDefault();}
	});

	const postData = (body) =>{
		return fetch('./server.php', {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(body)
		});
	};
};

export default sendForm;