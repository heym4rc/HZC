// ACTIVE NAVBAR
const buttonMenu = document.querySelector('.header-menu')
const nav = document.querySelector('.navbar')

buttonMenu.addEventListener('click', () => {
        nav.classList.toggle('navbar-active')
})