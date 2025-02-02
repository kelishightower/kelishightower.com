/* ----- NAVIGATION BAR FUNCTION-----*/
function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");

    // if the classes name is nav-menu then go ahead and tack on the word responsive to the class name so...
    //it now has a new class that allows it to be responsive in some way
    // if it dosen't match then revert back to the OG nav-menu class name
    //I think overall its desciding what css properties to use (depending on screen size) which we will establish later?
    if(menuBtn.className === "nav-menu"){
        menuBtn.className += " responsive";
    } else {
        menuBtn.className = "nav-menu"
    }
}
/* ----- NAV BAR SHADOW WHILE SCROLLING-----*/


window.onscroll = function() {headerShadow ()};

// Creates a function called headerShadow
function headerShadow(){
    // declared a new var titled navHeader
    // Goes and finds the HTML element with the name "header"
    // By making it a const the variable cannot be reseasigned only modified
    const navHeader =document.getElementById("header");

    // if the postion on the web page in the vertical sense
    // the two different types are for various web browsers
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        // firs 0 = no horizontal shaddow
        // second 1 = ammount of vertial shaddow
        // 6 = the blur radius of the shadow
        // The following is the color of the shaddow
        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        // .style allows JS to modify CSS stuff directly
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";
    } else{
        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        // spacing between text
        navHeader.style.lineHeight= "90px";

    }

}

/* ----- TYPING EFFECT----*/
var typingEffect = new Typed(".typedText",{
    strings: ["an Advocate", "Open Minded", "a future Developer", "a Chef"],
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

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-menu a[href*=' + sectionId +']').classList.add('active-link')
        } else {

            document.querySelector('.nav-menu a[href*=' + sectionId +']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)

/* ----- NAVIGATION BAR FUNCTION-----*/






/* ----- NAVIGATION BAR FUNCTION-----*/