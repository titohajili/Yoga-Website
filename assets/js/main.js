/*========= Show Menu ==========*/
const navClose = document.getElementById('nav-close')
const navToggle = document.getElementById('nav-toggle')
const navMenu = document.getElementById('nav-menu')

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu') 
    })
}

/*========== REMOVE MENU MOBILE ===========*/

    const navLink = document.querySelectorAll('.nav__link')

    const linkAction = () => {
        const navMenu = document.getElementById('nav-menu')

        navMenu.classList.remove('show-menu')
    
    
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*============ ADD BLUR TO HEADER ===========*/
const blurHeader = () =>{
    const header = document.getElementById('header')

    this.scrollY >= 50 ? header.classList.add('blur-header')
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader);

/*========== Scroll Up ==========*/

const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp);

/*========== Scroll Sections Link =========*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                sectionClass.classList.add('active-link');
            } else {
                sectionClass.classList.remove('active-link');
            }
    })
}

window.addEventListener('scroll', scrollActive);


/*========== Dark Light Theme ===========*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => document.body.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme) 
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () =>{
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
});

/*=========== Scroll Reveal Animation ===========*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    //reset: true //Animation repeat
})

sr.reveal(`.home__data, .list__container, .join__content , .footer__container`)
sr.reveal(`.home__img`, {origin: 'bottom'})
sr.reveal(`.health__image, .routine__images, .follow__img-3`, {origin: 'left'})
sr.reveal(`.health__data, .routine__data, .follow__img-4`, {origin: 'right'})
sr.reveal(`.follow__data, .follow__content-1 img`, {interval:100})