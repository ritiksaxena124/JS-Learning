const body = document.querySelector("body");
const rect = document.querySelector("#rect");


window.addEventListener("mousemove", (e) => {
    const rectPosition = rect.getBoundingClientRect();
    gsap.utils.mapRange(0, window.innerWidth, 100 + rectPosition.width / 2, window.innerWidth - 100 + rectPosition.width / 2, e.clientX)
   gsap.to(rect, {
    left: e.clientX + "px",
    ease: Power3
   })
})