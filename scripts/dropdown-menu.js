const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const bar1 = document.querySelector(".bar-1")
const bar3 = document.querySelector(".bar-3")

hamburger.addEventListener("click", ()=> {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    bar1.classList.add("animation");
    bar3.classList.add("animation");
})

document.querySelectorAll(".menu__link").forEach(n => n.addEventListener("click", ()=> {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    bar1.classList.toggle("animation");
    bar3.classList.toggle("animation");
}))

bar1