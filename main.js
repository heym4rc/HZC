// ACTIVE NAVBAR
const buttonMenu = document.querySelector('.header-menu')
const nav = document.querySelector('.navbar')

buttonMenu.addEventListener('click', () => {
        nav.classList.toggle('navbar-active')
})

// CLOSE MENU - CLICK ITEM
const links = document.querySelectorAll('nav a')

for (const link of links) {
    link.addEventListener('click', function () {
        nav.classList.remove('navbar-active')
    })
}

/* BUTTON BACK TO TOP */
const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
    if (window.scrollY >= 560) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

/* WHEN SCROLL */
window.addEventListener('scroll', function () {
        backToTop()
})