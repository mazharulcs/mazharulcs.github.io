/* ============ ScrollHeader Behaviour ============*/
function scrollHeader() {
    const header = document.getElementById('header');
    const navCenter = document.getElementById('nav');
    if(this.scrollY >= 50) {
        header.classList.add('scroll-header');
        navCenter.classList.add('nav-center');
    }
    else {
        header.classList.remove('scroll-header');
        navCenter.classList.remove('nav-center');
    }
}

window.addEventListener('scroll', scrollHeader);


/* ===================== Active-link on Nav list ================= */
navActive('home-nav');

function navActive(value) {
    const navListActive = document.getElementsByClassName('nav__link');
    for(i = 0; i < navListActive.length; i++) {

        navListActive[i].classList.remove('active-link');

        if(navListActive[i].className.indexOf(value) > -1) {
            navListActive[i].classList.add('active-link');
        }
    }
}


/* ======================== Nav Toggle ====================== */
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav__menu');
const navClose = document.getElementById('nav-close');
    /* ==== show menu ===== */
    /* validate if constant exists */
    if(navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('nav__menu__show');
        });
    }

    /* ==== Hide show ==== */
    if(navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('nav__menu__show');
        });
    }
function nav__open() {
    
    // navToggle.style.display = "none";
    navToggle.classList.remove('nav__toggle');
    navMenu.classList.add('nav__menu__show');
}


function nav__close() {
    // console.log(navToggle);
    // navToggle.style.display = "block";
    navToggle.classList.add('nav__toggle');
    navMenu.classList.remove('nav__menu__show');
}

/* ======================== Remove Nav-Menu Mobile Device ====================== */
const navLink = document.querySelectorAll('.nav__link');
// console.log(navLink);

for(i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener('click', removeNavMenu);
}
function removeNavMenu() {
    const navMenu = document.getElementById('nav__menu');
    const navToggle = document.getElementById('nav-toggle');

    navMenu.classList.remove('nav__menu__show');
    // navToggle.style.display = "block";
}
console.log(navLink);



/* ===================== Project Filter Options ===================*/
filterProjects('all');

function filterProjects(value) {
    let x, i, y;

    // button active work filtering
    y = document.getElementsByClassName('category__btn');
    for(i = 0; i < y.length; i++) {
        y[i].classList.remove('active-work');
        if(y[i].className.indexOf(value)>-1) {
            y[i].classList.add('active-work');
        }
    }

    // project filtering
    x = document.getElementsByClassName('project__item');
    for(i = 0; i < x.length; i++) {
        x[i].classList.remove('project__show');
        if(value=='all' || x[i].className.indexOf(value)>-1) {
            x[i].classList.add('project__show');
        }
    }
}


/* ================= Testimonials ========================= */
let index = 0;

arrowButton(0);

function dotButton(value) {
    index = 0;
    arrowButton(value);
}

function arrowButton(value) {
    index += value;
    // arrow
    let slide = document.getElementsByClassName('testimonial__item');
    let slideLength = slide.length;
    for(let i = 0; i < slideLength; i++) {
        slide[i].classList.remove('show');
    }
    
    // dot
    let dot = document.getElementsByClassName('circle');
    for(i = 0; i < slideLength; i++) {
        dot[i].classList.remove('active');
    }

    if(index >= slideLength) index = 0;
    else if(index < 0) index = slideLength-1;
    slide[index].classList.add('show');
    dot[index].classList.add('active');
}


/* ===================== Contact Form ===================*/
const contactForm = document.getElementById('contact-form'),
    contactName = document.getElementById('contact-name'),
    contactEmail = document.getElementById('contact-email'),
    Message = document.getElementById('message'),
    contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();

    // check if the field has a value
    if(contactName.value == '' || contactEmail.value == '' || Message.value == '') {
        // add and remove color
        contactMessage.classList.remove('color-light');
        contactMessage.classList.add('color-dark');

        // show message
        contactMessage.textContent = "Write all the input fields";
    } else {
        // serviceID -templateID - #form - publickey
        emailjs.sendForm('service_ljmgmch', 'template_69cxfcg', '#contact-form', '-raFI5AAnoPJvFeMW')
        .then(() => {
            // show message and add color, window + dot to open emoji
            contactMessage.classList.add('color-light');
            contactMessage.textContent = "Message has sent successfully";

            // remove message after 5 seconds
            setTimeout(() => {
                contactMessage.textContent = '';
            }, 5000);
        })
    }
}

contactForm.addEventListener('submit', sendEmail);

