const $email = document.querySelector('.email');
const $password = document.querySelector('.password');
const $btn = document.querySelector('.signIn');
const $error = document.querySelector('.error');

window.addEventListener('load', () => {
    if(!localStorage.getItem('auth')){
        localStorage.setItem('auth', false)
    }else{
        if(localStorage.getItem('auth') === 'true'){
            window.open('./index.html', '_self')
        }
    }
})

window.addEventListener('load', () =>{
	if(!localStorage.getItem('image') && !localStorage.getItem('color')){
		document.body.style.background = 'green'
	}else{
		const image = JSON.parse(localStorage.getItem('image'))
		const color = JSON.parse(localStorage.getItem('color'))
		if(image){
			document.body.style.background = image
            document.body.style.backgroundAttachment = 'fixed'
		}else{
			document.body.style.background = color
		}
	}
})

$btn.addEventListener('click', e => {
    e.preventDefault();
    if($email.value === 'admin' && $password.value === 'admin'){
        $email.style.borderColor = null
        $password.style.borderColor = null
        $error.innerHTML = 'Вы успешно авторизовались! Совершается переход...'
        $error.classList.remove('text-danger')
        $error.classList.add('text-success')
        localStorage.setItem('auth', true)
        setTimeout(() => {
            window.open('./index.html', '_self')
        }, 2000)
    }else{
        $email.style.borderColor = 'red'
        $password.style.borderColor = 'red'
        $email.value = ''
        $password.value = ''
        $error.innerHTML = 'Неверно введены данные!'
        $error.classList.add('text-danger')
    }
})