const database = [
    {
        id:1,
        name:'Naruto Uzumaki',
        power:'Nine tails',
        village:'Konoha',
        level:'7th Hokage',
        clan:'Uzumaki',
        style: 'Zipper',
        image:'https://pa1.narvii.com/7422/b16cfd8029b2e6a4ec1764b3644e9396fa8d209dr1-480-270_hq.gif'
    },
    {   
        id:2,
        name:'Sasuke Uchiha',
        power:'Rinnegan + MS',
        village:'Konoha',
        level:'Shadow Hokage',
        clan:'Uchiha',
        style: 'Wind',
        image:'https://i.pinimg.com/originals/71/48/c8/7148c82838437c6d8ad478848e68d482.gif '
    },
    {
        id:3,
        name:'Kakashi Hatake',
        power:'Purple Chidori + MS',
        village:'Konoha',
        level:'6th Hokage',
        clan:'White Claw',
        style: 'Wind',
        image:'https://thumbs.gfycat.com/TotalOptimalAmericantoad-size_restricted.gif'
    },
    {
        id:4,
        name:'Minato Namikaze',
        power:'Rasengan + Yellow flash Fuuijin',
        village:'Konoha',
        level:'4th Hokage',
        clan:'Namikaze',
        style: 'Water',
        image:'https://thumbs.gfycat.com/SaltyLateBasil-size_restricted.gif'
    },
    {
        id:5,
        name:'Itachi Uchiha',
        power:'MS + Genjutsu',
        village:'Konoha',
        level:'Unlimited',
        clan:'Akatsuki',
        style: 'Fire',
        image:'https://media0.giphy.com/media/CchzkJJ6UrQmQ/giphy.gif'
    },
    {
        id:6,
        name:'Madara Uchiha',
        power:'MS + Six Path',
        village:'Konoha',
        level:'Destroyer',
        clan:'Akatsuki',
        style: 'Fire',
        image:'https://media1.tenor.com/images/fe60d20d14d53b4e0929b0a0b17c0781/tenor.gif?itemid=17049380'
    },
    {
        id:7,
        name:'Hashirama Senju',
        power:'Wood Style + Regeneration',
        village:'Konoha',
        level:'God of War',
        clan:'Senju',
        style: 'Tree',
        image:'https://i.makeagif.com/media/7-28-2016/_eMaFk.gif'
    },
    {
        id:8,
        name:'Pain (Tendo)',
        power:'Six path',
        village:'Hidden Rain',
        level:'God',
        clan:'Akatsuki',
        style: 'Land',
        image:'https://thumbs.gfycat.com/JampackedExcitableHydra-size_restricted.gif'
    },
    {
        id:9,
        name:'Commando A',
        power:'Light shield',
        village:'Hidden Cloud',
        level:'4th Hokage',
        clan:'Lighter',
        style: 'Zipper',
        image:'https://i.pinimg.com/originals/93/85/90/938590c23c6565490f49b7f4646f7601.gif'
    },
    {
        id:10,
        name:'Gaara',
        power:'Shukakus Land',
        village:'Hidden Land',
        level:'5th Kazekage',
        clan:'Kazekage',
        style: 'Sand',
        image:'https://i.gifer.com/C393.gif'
    },
    {
        id:11,
        name:'Kisame Hoshikage',
        power:'White Shark + Water Style',
        village:'Hidden Rain',
        level:'Untail bijuu',
        clan:'Akatsuki',
        style: 'Water',
        image:'https://steamuserimages-a.akamaihd.net/ugc/941711796106927460/EDA08FFEF3AFDFFCD5241FD00926BCB4DAF47C09/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'
    },
    {
        id:12,
        name:'Killer B',
        power:'Eight Tail + Katana',
        village:'Hidden Cloud',
        level:'Rap God',
        clan:'Lighter',
        style: 'Raper',
        image:'https://qph.fs.quoracdn.net/main-qimg-8380be95c048107f587b8a5ebf70fd9f'
    },    
    
]
const $container = document.querySelector('.row');
const $search = document.querySelector('.search');
const $select = document.querySelector('.select');
const $menu_btn = document.querySelector('.menu_btn');
const $signOut = document.querySelector('.signOut');
const $sidebar = document.querySelector('.sidebar');
const $selectEdit = document.querySelector('.selectEdit');
const $edit = document.querySelector('.editInput');
const $add = document.querySelector('.add');

window.addEventListener('load', () => {
    if(!localStorage.getItem('ninjas')){
        localStorage.setItem('ninjas', JSON.stringify(database))
    }else{
        const ninja = JSON.parse(localStorage.getItem('ninjas'))
        const ninjaId = ninja.map((item, index) => {
            return {...item, id: index}
        })
        localStorage.setItem('ninjas', JSON.stringify(ninjaId))
    }
})

window.addEventListener('load', () => {
    const auth = localStorage.getItem('auth')
    if(auth === 'false'){
        window.open('./auth.html', '_self')
    }
})

window.addEventListener('load', () =>{
	if(!localStorage.getItem('image') && !localStorage.getItem('color')){
		document.body.style.background = 'whitesmoke'
	}else{
		const image = JSON.parse(localStorage.getItem('image'))
		const color = JSON.parse(localStorage.getItem('color'))
		if(image){
			document.body.style.background = image
		}else{
			document.body.style.background = color
		}
	}
})

$signOut.addEventListener('click', e => {
    e.preventDefault()
    localStorage.setItem('auth', false)
    window.open('./auth.html', '_self')
})

window.addEventListener('load', cardTemplate(JSON.parse(localStorage.getItem('ninjas'))))

function cardTemplate(base){
    const card = base.map(({name, image, id}) => {
        return `
            <div class="card">
                <div class="card-header text-center text-light mt-3">
                    <h3>${name}</h3>
                </div>
                <div class="card-image">
                    <img src="${image}" />
                </div>
                <div class="card-footer">
                    <button onclick="More(${id})" class="btn btn-outline-primary w-75">More</button>
                </div>
            </div>
        `
    }).join('')
    $container.innerHTML = card
}

$select.addEventListener('change', e => {
    var value = e.target.value
    if(value === 'Clan'){
        $search.setAttribute('placeholder', 'Search by Clan')
    }else if(value === 'Village'){
        $search.setAttribute('placeholder', 'Search by Clan')
    }else if(value === 'Power'){
        $search.setAttribute('placeholder', 'Search by Power')
    }else if(value === 'Name'){
        $search.setAttribute('placeholder', 'Search by Name')
    }else if(value === 'Level'){
        $search.setAttribute('placeholder', 'Search by Level')
    }else if(value === 'Style'){
        $search.setAttribute('placeholder', 'Search by Style')
    }
})

$selectEdit.addEventListener('change', e => {
    var value = e.target.value
    if(value === 'image'){
        $edit.setAttribute('placeholder', 'Edit by image')
    }else{
        $edit.setAttribute('placeholder', 'Edit by color')
    }
})

$search.addEventListener('input', e => {
    var value = e.target.value.toUpperCase()
    var selected = $select.value
    const ninjas = JSON.parse(localStorage.getItem('ninjas'))
    if(selected === 'Clan'){
        const filtered = ninjas.filter(item => item.clan.toUpperCase().includes(value))
        cardTemplate(filtered)
    }else if(selected === 'Village'){
        const filtered = ninjas.filter(item => item.village.toUpperCase().includes(value))
        cardTemplate(filtered)
    }else if(selected === 'Level'){
        const filtered = ninjas.filter(item => item.level.toUpperCase().includes(value))
        cardTemplate(filtered)
    }else if(selected === 'Power'){
        const filtered = ninjas.filter(item => item.power.toUpperCase().includes(value))
        cardTemplate(filtered)
    }else if(selected === 'Name'){
        const filtered = ninjas.filter(item => item.name.toUpperCase().includes(value))
        cardTemplate(filtered)
    }else if(selected === 'Style'){
        const filtered = ninjas.filter(item => item.style.toUpperCase().includes(value))
        cardTemplate(filtered)
    }
})

$edit.addEventListener('input', e => {
    var value = e.target.value
    var selected = $selectEdit.value
    if(selected === 'image'){
        document.body.style.background = `url("${value}") no-repeat center / cover`
        document.body.style.width = '100%'
        document.body.style.height = '100vh'
        document.body.style.objectFit = 'cover'
        document.body.style.backgroundAttachment = 'fixed'
        localStorage.setItem('image', JSON.stringify(`url("${value}") no-repeat center / cover`))
        localStorage.setItem('color', JSON.stringify(''))
        window.location.reload()
    }else{
        document.body.style.backgroundColor = value
        localStorage.setItem('color', JSON.stringify(value))
        localStorage.setItem('image', JSON.stringify(''))
    }
})
$add.addEventListener('click' , e => {
    e.preventDefault()
    window.open('./admin.html', '_self')
})

$menu_btn.addEventListener('click', e => {
    e.preventDefault()
    $menu_btn.classList.toggle('active')
    $sidebar.classList.toggle('active')
})

function More(id){
    const ninja = JSON.parse(localStorage.getItem('ninjas'))
    localStorage.setItem('more', JSON.stringify([ninja[id]]))
    window.location.reload()
    window.open('./more.html', '_self')
}