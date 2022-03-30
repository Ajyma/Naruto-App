const $submit = document.querySelector('.submit');
const back = document.querySelector('.arrow');
const $inputs = document.querySelectorAll('input');

window.addEventListener('load', () => {
    if(!localStorage.getItem('ninjas')){
        window.open('./index.html', '_self')
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

$submit.addEventListener('click', e => {
    e.preventDefault()
    let isValues = true
    const obj = {}
    $inputs.forEach(item => {
        if(item.value === ''){
            isValues = false
            item.style.borderColor = "red"
        }else{
            obj[item.id] = item.value
        }
    })

    if(isValues){
        const base = JSON.parse(localStorage.getItem('ninjas'))
        base.push(obj)
        localStorage.setItem('ninjas', JSON.stringify(base))
    }else{
        alert('Заполните все поля!')
    }
})

back.addEventListener('click', e => {
    e.preventDefault()
    window.open('./index.html' , '_self')
})