function onLoad() {
    heroAnimation();

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