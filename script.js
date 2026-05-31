// =========================
// MOBILE MENU
// =========================

// ================= POPUP =================

const popupBtn =
document.querySelector(".popup-btn");

const popup =
document.getElementById("popup");

const closePopup =
document.getElementById("close-popup");

popupBtn.addEventListener("click", ()=>{

    popup.style.display = "flex";

});

closePopup.addEventListener("click", ()=>{

    popup.style.display = "none";

});

window.addEventListener("click", (e)=>{

    if(e.target == popup){

        popup.style.display = "none";

    }

});


// ================= GITHUB BUTTON =================

const githubBtn =
document.querySelector(".github-btn");

githubBtn.addEventListener("click", ()=>{

    window.open(
    "https://github.com/vaishnavi2004-v",
    "_blank"
    );

});

function toggleMenu() {

    document
    .getElementById("menu")
    .classList.toggle("active");

}


// =========================
// SLIDER FUNCTIONALITY
// =========================

const slider = document.getElementById("slider");

const nextBtn = document.getElementById("next");

const prevBtn = document.getElementById("prev");


// Amount to slide
let scrollAmount = 0;


// Next Button

nextBtn.addEventListener("click", () => {

    slider.scrollBy({
        left: 380,
        behavior: "smooth"
    });

});


// Previous Button

prevBtn.addEventListener("click", () => {

    slider.scrollBy({
        left: -380,
        behavior: "smooth"
    });

});


// =========================
// AUTO SLIDER
// =========================

setInterval(() => {

    slider.scrollBy({
        left: 380,
        behavior: "smooth"
    });

    // Reset Slider
    if (
        slider.scrollLeft +
        slider.clientWidth >=
        slider.scrollWidth
    ) {

        slider.scrollTo({
            left: 0,
            behavior: "smooth"
        });

    }

}, 4000);



// =========================
// SCROLL ANIMATION
// =========================

const sections =
document.querySelectorAll("section");


window.addEventListener("scroll", () => {

    sections.forEach((section) => {

        const sectionTop =
        section.getBoundingClientRect().top;

        if (sectionTop < 500) {

            section.classList.add("show");

        }

    });

});



// =========================
// TYPING EFFECT
// =========================

const text =
"Web Developer | Python Developer";

let index = 0;

function typeEffect() {

    document.getElementById("typing").innerHTML =
    text.slice(0, index);

    index++;

    if(index > text.length){

        index = 0;

    }

}

setInterval(typeEffect, 150);



// =========================
// NAVBAR BACKGROUND CHANGE
// =========================

window.addEventListener("scroll", () => {

    const header =
    document.querySelector("header");

    if(window.scrollY > 50){

        header.style.background =
        "rgba(0,0,0,0.9)";

    }

    else{

        header.style.background =
        "rgba(0,0,0,0.5)";

    }

});



// =========================
// IMAGE HOVER EFFECT
// =========================

const cards =
document.querySelectorAll(".project-card");

cards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
        "translateY(-10px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
        "translateY(0px) scale(1)";

    });

});

// ================= LINKEDIN =================

const linkedinBtn =
document.querySelector(".linkedin-btn");

linkedinBtn.addEventListener("click", ()=>{

    window.open(
    "https://www.linkedin.com/in/vaishnavi-gulhane-5b97a42b2",
    "_blank"
    );

});
const roles = [
    "Web Developer",
    "Java Developer",
    "Python Developer",
    "Frontend Developer"
];

let roleIndex = 0;
let charIndex = 0;

const typingElement = document.getElementById("typing");

function typeEffect() {

    if(charIndex < roles[roleIndex].length){

        typingElement.textContent +=
        roles[roleIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect, 100);
    }
    else{

        setTimeout(eraseEffect, 1500);
    }
}

function eraseEffect(){

    if(charIndex > 0){

        typingElement.textContent =
        roles[roleIndex].substring(0,charIndex-1);

        charIndex--;

        setTimeout(eraseEffect,50);
    }
    else{

        roleIndex =
        (roleIndex+1)%roles.length;

        setTimeout(typeEffect,500);
    }
}

typeEffect();





// ================= GITHUB =================

const githubBtn =
document.querySelector(".github-btn");

githubBtn.addEventListener("click", ()=>{

    window.open(
    "https://github.com/vaishnavi2004-v",
    "_blank"
    );

});

// =========================
// BUTTON RIPPLE EFFECT
// =========================

const buttons =
document.querySelectorAll(".buttons a");

buttons.forEach((btn) => {

    btn.addEventListener("click", function(e){

        let x =
        e.clientX - e.target.offsetLeft;

        let y =
        e.clientY - e.target.offsetTop;

        let ripple =
        document.createElement("span");

        ripple.style.left = `${x}px`;

        ripple.style.top = `${y}px`;

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

     
    });