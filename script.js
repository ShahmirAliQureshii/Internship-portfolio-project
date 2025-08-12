gsap.from("#hero h1", { duration: 1, y: -50, opacity: 0, ease: "power2.out" });
gsap.from("#hero p", {
  duration: 1,
  delay: 0.3,
  y: 30,
  opacity: 0,
  stagger: 0.2,
});
gsap.from("#hero a", { duration: 1, delay: 0.6, opacity: 0, stagger: 0.2 });
gsap.utils.toArray("section").forEach((sec) => {
  gsap.from(sec, {
    scrollTrigger: { trigger: sec, start: "top 80%" },
    y: 50,
    opacity: 0,
    duration: 1,
  });
});

let hamburgerMenu = document.getElementById("hamburger-menu");
let menuDiv = document.querySelector(".menuDiv");
let lists = document.querySelectorAll("#menu-list li");

hamburgerMenu.addEventListener('click',()=>{
  menuDiv.style.transform = 'translateX(0)'
})


lists.forEach((list) => {
  list.addEventListener('click',()=>{
    console.log('hello working')
    menuDiv.style.transform = 'translateX(210px)'
  })
});