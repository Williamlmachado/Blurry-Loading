const loadText=document.querySelector('.loading-text')
const loadText=document.querySelector('.bg')

let load = 0

let int = setInterval(blurring, 30)

function blurring(){
    load++

    if(load>99){
        clearInterval(int)
    }
    console.log(load)

    loadText.innerText = '${load}%'
    loadText.style.opacity = scale(load,0,100,1,0)
    bg.

}