const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})



// open/close  hamburger menu
const humberger = document.querySelector(".humberger");
const headerhum = document.querySelector(".header-hum");

const link = document.querySelectorAll('.top__link');


const links = document.querySelector(".header-hum .nav-links li a");

humberger.addEventListener("click", () => {

    headerhum.classList.toggle("open");

});


// close hamburger menu after click a

link.forEach((a) => {
    a.addEventListener('click', () => {
        headerhum.classList.toggle('open');
    });
});

/**/