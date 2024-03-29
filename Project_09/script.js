function onLoad() {
    heroAnimation();
    scrollToTop();

}

function heroAnimation() {
    let tl = gsap.timeline();
    tl.to("#yellow-background-1", {
        top: "-100%",
        delay: 0.5,
        duration: 0.75,
        ease: "expo.out"
    })


    tl.from("#yellow-background-2", {
        top: "100%",
        duration: 0.75,
        ease: "expo.out"
    }, "animate")

    tl.to("#loader h1", {
        duration: 0.75,
        color: "#000"
    }, "animate")
    tl.to("#loader", {
        display: "none"
    })
}


const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
})

onLoad();


let elems = document.querySelectorAll(".elem");
let page2 = document.querySelector("#page2");
elems.forEach(function (item) {
    item.addEventListener("mouseenter", () => {
        imgURL = item.getAttribute("data-img");
        page2.style.backgroundImage = `url(${imgURL})`
    })
})
function scrollToTop() {
    document.querySelector("#footer").addEventListener("click", function () {
        scroll.scrollTo(0)
    });
}