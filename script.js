/* ----- NAVIGATION BAR FUNCTION-----*/
const navHeader = document.getElementById("header");
const navToggle = document.getElementById("navToggle");

function myMenuFunction(){
    const isExpanded = navHeader.classList.toggle("nav-expanded");
    navToggle.setAttribute("aria-expanded", String(isExpanded));
    navToggle.setAttribute("aria-label", isExpanded ? "Collapse navigation" : "Expand navigation");
    return isExpanded;
}

function closeMenu(){
    navHeader.classList.remove("nav-expanded");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Expand navigation");
}

navToggle.addEventListener("click", myMenuFunction);
/* ----- NAV BAR SHADOW WHILE SCROLLING-----*/


window.onscroll = function() {headerShadow ()};

// Creates a function called headerShadow
function headerShadow(){
    // if the postion on the web page in the vertical sense
    // the two different types are for various web browsers
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        // firs 0 = no horizontal shaddow
        // second 1 = ammount of vertial shaddow
        // 6 = the blur radius of the shadow
        // The following is the color of the shaddow
        navHeader.style.boxShadow = "0 14px 36px rgba(0, 0, 0, 0.08)";
        // .style allows JS to modify CSS stuff directly
        navHeader.style.height = "64px";
    } else{
        navHeader.style.boxShadow = "none";
        navHeader.style.height = window.innerWidth <= 900 ? "64px" : "72px";

    }

}

/* ----- TYPING EFFECT----*/
var typingEffect = new Typed(".typedText",{
    strings: ["Designer", "Learning Designer", "Product Thinker", "Systems Thinker", "Problem Solver"],
        loop: true,
        typeSpeed: 150, backSpeed: 80, backDelay: 2000
})

/* -----  SCROLL REVEAL ANIMATION-----*/
const sr = ScrollReveal({
    // direction form where the animation comes in from
    origin: 'top',
    // how far its traveled or its zooming up 8- pixels from the start
    distance: '200px',
    // how long the animation will take to reach the final position
    duration: 700,
    //if the naimation will happen again
    reset: true
})

/* -----  HOME-----*/
//added deplay is how long it wait for it turn to go in the animation
//usually 100 200 200 200 300
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})



/* -----  PROJECT BOX-----*/
sr.reveal('.project-box',{interval: 200})


/* -----  HEADINGS-----*/

sr.reveal('.top-header',{})

/* -----  SCROLL REVEAL LEFT_RIGHT ANIMATION-----*/




/* -----  ABOUT INFO & CONTACT INFO-----*/

const srRight = ScrollReveal({
    // direction form where the animation comes in from
    origin: 'left',
    // how far its traveled or its zooming up 8- pixels from the start
    distance: '80px',
    // how long the animation will take to reach the final position
    duration: 2000,
    //if the naimation will happen again
    reset: true
})

sr.reveal('.about-info',{delay: 100})
sr.reveal('.contact-info',{delay: 100})
sr.reveal('.service-card',{interval: 120})
sr.reveal('.skills-strip',{delay: 100})

/* -----  ABOUT SKILLS & FORM BOX-----*/
const srLeft = ScrollReveal({
    // direction form where the animation comes in from
    origin: 'right',
    // how far its traveled or its zooming up 8- pixels from the start
    distance: '80px',
    // how long the animation will take to reach the final position
    duration: 2000,
    //if the naimation will happen again
    reset: true
})
sr.reveal('.skills-box',{delay: 100})
sr.reveal('.form-control',{delay: 100})


/* -----  CHANGE ACTIVE LINK-----*/


//gets all sections that have an id attached to it
const section = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.scrollY;

    section.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')
        const navLink = document.querySelector('.nav-menu a[href*=' + sectionId +']');

        if (!navLink) {
            return;
        }

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            navLink.classList.add('active-link')
        } else {

            navLink.classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)

/* ----- NAVIGATION BAR FUNCTION-----*/

const navLinks = document.querySelectorAll('.nav-menu .nav-link');
navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        closeMenu();
    });
});

document.addEventListener('click', (event) => {
    if (!navHeader.contains(event.target)) {
        closeMenu();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeMenu();
    }
});

function handleResize(){
    if (window.innerWidth > 900) {
        closeMenu();
    }
    headerShadow();
}

window.addEventListener('resize', handleResize);
headerShadow();






/* ----- NAVIGATION BAR FUNCTION-----*/
