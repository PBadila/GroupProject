let nav1 = document.querySelector('.nav1')
let nav2 = document.querySelector('.nav2')
let changingDiv1 = document.querySelector('#changingDiv1')
let fact1 = document.querySelector('#fact1')
let fact2 = document.querySelector('#fact2')
let fact3 = document.querySelector('#fact3')
let fact4 = document.querySelector('#fact4')
let fact5 = document.querySelector('#fact5')
let ex = document.querySelector('.ex')
let goal1 = document.querySelector('#goal1')
let goal2 = document.querySelector('#goal2')
let goal3 = document.querySelector('#goal3')
let stretchListImg = document.querySelector('.stretchListImg')
let audio = document.querySelector('.audio')

console.log(changingDiv1)

let click = 0
let nav = 0 

nav2.addEventListener('click',()=>{
    switch (nav){
        case 0:
            console.log(nav)
            changingDiv1.style.display = "none"
            changingDiv2.style.display = "flex"
            break
        case 1:
            console.log(nav)
            changingDiv2.style.display = "none"
            changingDiv3.style.display = "flex"
            break
        case 2:
            changingDiv3.style.display = "none"
            changingDiv4.style.display = "flex"
    }
    nav++
})

nav1.addEventListener('click',()=>{
    switch (nav){
        case 0:
            console.log(nav)
            changingDiv1.style.display = "flex"
            changingDiv2.style.display = "none"
            break
        case 1:
            console.log(nav)
            changingDiv2.style.display = "flex"
            changingDiv3.style.display = "none"
            break
        case 2:
            changingDiv3.style.display = "flex"
            changingDiv4.style.display = "none"
    }
    nav--
})
fact1.addEventListener('click',()=>{
    console.log('clicked first')
    ex.src = "./imgs/exRandFact.png"
    click = 1
    console.log(click)
})

fact2.addEventListener('click',()=>{
    console.log('clicked first')
    ex.src = "./imgs/exRandGen.png"
    click = 2
    console.log(click)
})

fact3.addEventListener('click',()=>{
    console.log('clicked first')
    ex.src = "./imgs/randomRec.png"
    click = 3
    console.log(click)
})

fact4.addEventListener('click',()=>{
    console.log('clicked first')
    ex.src = "./imgs/search.png"
    click = 4
    console.log(click)
})

fact5.addEventListener('click',()=>{
    console.log('clicked first')
    switch (click){
        case 4:
            ex.src = "./imgs/favorites.png"
            console.log(click)
            break
        case 5:
            ex.src = "./imgs/fav2.png"
            console.log(click)
            break
        case 6:
            ex.src = "./imgs/fav3.png"
            console.log(click)
            break
    }
    click++
    
})

goal1.addEventListener('click',()=>{
    stretchListImg.src="./imgs/health-check.png"
    stretchListImg.style.display = "block"
    audio.style.display = "none"
})

goal2.addEventListener('click',()=>{
    stretchListImg.src="./imgs/health-check.png"
    stretchListImg.style.display = "block"
    audio.style.display = "none"
})

goal3.addEventListener('click',()=>{
    stretchListImg.src="./imgs/cassette.png"
    stretchListImg.style.display = "block"
    audio.style.display = "block"
})