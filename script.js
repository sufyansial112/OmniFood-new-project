const navBtn = document.querySelector('.mobile-nav-btn')
const header = document.querySelector('.main-header')
navBtn.addEventListener('click', function(){

    header.classList.toggle('nav-open')

})