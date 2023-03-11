let dadesh = document.querySelector('#parazit')
let colorRed = document.querySelector(".red")
let colorPink = document.querySelector('.pink')
let colorBlac = document.querySelector('.blac')
let colorBlue = document.querySelector('.blue')
let colorWhite = document.querySelector('.white')


colorRed.onclick = () => {
    dadesh.setAttribute('src', "img/red.jpg")
}
colorPink.onclick = () => {
    dadesh.setAttribute('src', "img/pink.jpg")
}
colorBlac.onclick = () => {
    dadesh.setAttribute('src', 'img/blac.jpg')
}
colorBlue.onclick=()=>{
    dadesh.setAttribute('src', 'img/blue.webp')
}
colorWhite.onclick=()=>{
    dadesh.setAttribute('src', 'img/wite.jpg')
}