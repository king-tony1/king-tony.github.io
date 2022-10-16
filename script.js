// 'use strict';

const hourEl = document.querySelector('.hours');
const minuteEl = document.querySelector('.minutes');
const secondsEl = document.querySelector('.seconds');
const ampmEl = document.querySelector('.ampm');
const categoryBtn = document.querySelector('.category');
const sideNav = document.querySelector('.main-topics');
const closeSideNav = document.getElementById('close');
const hiddenEl = document.querySelectorAll('.motion');
const cardContainer = document.querySelector('.trending-container');
const rightBtn = document.querySelectorAll('.next');
const lefttBtn = document.querySelectorAll('.prev');
const allImages = document.querySelectorAll('.img');
const imageContainerEl = document.querySelectorAll('.image-container-el');
const navBar = document.querySelector('nav');
const topBar = document.querySelector('.top');
const modalEl= document.querySelector('.modal');
const commentBtn = document.querySelectorAll('.comment');
const closeModal = document.querySelectorAll('#close-modal');
const heroBg = document.querySelector('.hero');
const openBar = document.getElementById('openBar');
const closeBar = document.querySelector('.fa-close');
const hiddenNAv = document.getElementById('hiddenNav');
const sharable = document.querySelectorAll('.like-and-share');
const bodyEl = document.querySelector('body');
const topEl = document.querySelector('.about');
const exploreBtn = document.getElementById('explore');

updateTime();
setInterval(updateTime, 1000);

function updateTime() {
    // CREATING THE TIME
    const time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    // CHECKING FOR THE VALUE IF IT IS LESS THAN 10 AND ADD ZERO
    minutes = minutes< 10 ? minutes + '0' : minutes;
    seconds = seconds < 10 ? seconds + '0' : seconds;

    // CHECKING FOR TIME OF DAY TO DISPLAY AM PM
    let day;
    if (hours > 12) {
        hours -=  12;
        day = 'PM';
    } else {
        day = 'AM';
    }

    // DISPLAYING THE TEXT CONTENTS OF TIME
    hourEl.textContent = hours;
    minuteEl.textContent = minutes;
    secondsEl.textContent = seconds;
    ampmEl.textContent = day;
}

categoryBtn.addEventListener('click', () => {
    sideNav.classList.remove('hidden');

})

closeSideNav.addEventListener('click', () => {
    sideNav.classList.add('hidden');
})

bodyEl.addEventListener('click', () => {
    sideNav.classList.add('hidden');
})


// IMPLEMENTING LAZY LOADING
let options = {
    root: null,
    threshold: 0.15
}
const observer = new IntersectionObserver((e) => {
    e.forEach((e) => {
        if (e.isIntersecting) {
            e.target.classList.remove('motion');
        } else {
            e.target.classList.add('motion');
        }
    })
}, options)


hiddenEl.forEach(el => observer.observe(el));



// IMAGE SLIDER IMPLEMENTATION
let currentImage = 1;
let timeout;

rightBtn.forEach(e => {
    e.addEventListener('click', () => {
        currentImage++;
        clearTimeout(timeout);
        updateImage();
        console.log('clicked me');
    
    })})

lefttBtn.forEach(e => {
    e.addEventListener('click', () => {
        currentImage--;
        clearTimeout(timeout);
        updateImage();
    })
})
updateImage();
function updateImage() {
    if (currentImage > allImages.length) {
        currentImage = 1;
    } else if (currentImage < 1) {
        currentImage = allImages.length;
    }
    imageContainerEl.forEach(e => {
        e.style.transform = `translateX(-${(currentImage - 1) * 400}px)`;
        timeout = setTimeout(() => {
            currentImage++;
            updateImage();
        }, 3000)
    })
}

// IMPLEMENTING STICKY NAV BAR
window.addEventListener('scroll', () => {
    if (window.scrollY > topBar.offsetTop - navBar.offsetHeight) {
        navBar.classList.add('active');
    }
    else {
        navBar.classList.remove('active');
    }
    updateHeroBg();
})


// IMPLEMENTING MODAL WINDOW
commentBtn.forEach((button) => {
    button.addEventListener('click', () => {
        modalEl.classList.remove('active');
    })
})

closeModal.forEach((button) => {
    button.addEventListener('click', () => {
        modalEl.classList.add('active');
    })
})



// UPDATING THE HERO BACKGROUND IMAGE EFFECT
function updateHeroBg() {
    heroBg.style.backgroundSize = 160 - window.pageYOffset / 11 + '%';
    heroBg.style.opacity = 1 - window.pageYOffset / 400;
}


// IMPLEMENTING HIDDEN NAV
openBar.addEventListener('click', () => {
    hiddenNAv.classList.add('active-el');
    console.log('clicked');
    
    
})

closeBar.addEventListener('click', () => {
    hiddenNAv.classList.remove('active-el');
    console.log('clicked');
    
})

// IMPLEMENTING LIKES
// sharable.forEach(e => {
//     e.addEventListener('click', (e) => {
//         if (e.target = ) {
            
//        }
         
//     })
// })



// IMPLEMENTING SMOOTH SCROLL
exploreBtn.addEventListener('click', () => {
    exploreBtn.preventDefault();
    topEl.scrollIntoView({
        behavior: "smooth",
    })
})