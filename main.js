/*--------------- TOGGLE BUTTON ---------------*/
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("left-[0]");
    hamburger.classList.toggle("ri-close-large-line");
})

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.toggle("left-[0]");
        hamburger.classList.toggle("ri-close-large-line");
    })
})

/*--------------- Show Scroll Up ---------------*/
const scrollUp = () => {
    const scrollUpBtn = document.getElementById("scroll-up");

    if (this.scrollY >= 250) {
        scrollUpBtn.classList.remove("-bottom-1/2");
        scrollUpBtn.classList.add("bottom-4");
    }
    else {
        scrollUpBtn.classList.add("-bottom-1/2");
        scrollUpBtn.classList.remove("bottom-4");
    }
    
}

window.addEventListener("scroll", scrollUp);


/*--------------- change background header ---------------*/
const scrollHeader = () => {
    const header = document.getElementById("navbar");

    if (this.scrollY >= 50) {
        header.classList.add("border-b", "border-yellow-500");
    }
    else {
        header.classList.remove("border-b", "border-yellow-500");
    }
    
}

window.addEventListener("scroll", scrollHeader);


/*--------------- Swiper Initialization ---------------*/
const swiper = new Swiper('.swiper', {
    // Optional parameters
    speed: 400,
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },


    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    grabCursor: true,
    breakpoints: {
        640: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    }
});

/*--------------- Activate links when scroll ---------------*/
const activateLink = () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    let current = "home";

    sections.forEach( section => {
        const sectionTop = section.offsetTop;
        if(this.scrollY > sectionTop - 60) {
            current = section.getAttribute('id');
        }
    })

    navLinks.forEach( link => {
        link.classList.remove("active");

        if(link.href.includes(current)){
            link.classList.add("active");
        }
    })
}

window.addEventListener("scroll", activateLink);


/*--------------- Scroll Reveal Animation ---------------*/
const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 300,
    reset: true
})

sr.reveal('.home_data, .about_head, .popular_head, .review_head, .footer_icon, .footer_content, .copy_right')
sr.reveal('.home_img', {delay:500, scale:0.5})

sr.reveal('.service_card, .popular_card', {interval: 100})


sr.reveal('.about_leaf', {delay: 300, origin: "right"})

sr.reveal('.about_item_1-img, .about_item_2-content', {origin: "left"})
sr.reveal('.about_item_2-img, .about_item_1-content', {origin: "right"})