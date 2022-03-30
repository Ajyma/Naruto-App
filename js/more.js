const identification = JSON.parse(localStorage.getItem('more'))
const h1 = document.querySelector('.titleDoc');
const container = document.querySelector('.row')
const back = document.querySelector('.arrow');

container.innerHTML = identification.map(({image, name, power, level, clan , village, style}) => {
    h1.innerHTML = name
    return `
        <div class="">
            <div class="card">
                <h1 class="text-center mt-5 title">${name}</h1>
                <div class="card-image">
                    <img src="${image}">
                </div>
                <div class="card-body">
                    <h3 class=""><span class="value">Power:</span> <span class="value2">${power}</span> </h3>
                    <h3 class=""><span class="value">Level:</span> <span class="value2">${level}</span> </h3>
                    <h3 class=""><span class="value">Clan:</span> <span class="value2">${clan}</span> </h3>
                    <h3 class=""><span class="value">Village:</span> <span class="value2">${village}</span> </h3>
                    <h3 class=""><span class="value">Style:</span> <span class="value2">${style}</span> </h3>
                </div>
            </div>
        </div>
    `
})

back.addEventListener('click', e => {
    e.preventDefault()
    window.open('./index.html' , '_self')
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