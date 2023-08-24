//nav nar collor change when scrolling

window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle('windows-scroll',window.scrollY>0)
})