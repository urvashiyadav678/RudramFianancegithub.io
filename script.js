var tl = gsap.timeline()

tl.from(".heroimg img",{
    y:100,
    opacity:0,
    duration:1,
    delay:0.5
})
tl.from(".title h1, .title h3",{
    x:-200,
    opacity:0,
    duration:0.6,
    delay:0.3,
    stagger:0.3

})


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navMenu");

hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-links").forEach(n=> n.addEventListener("click", () =>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");

}))
