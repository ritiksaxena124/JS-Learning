let tl = gsap.timeline();

function loadingPercentage() {
    let percentage = 0;
    let interval = setInterval(() => {
        percentage += Math.floor(Math.random() * 15);
        if (percentage < 100) {
            document.getElementById("loader").innerHTML = `<h1>${percentage}%</h1>`
        } else {
            percentage = 100;
            document.getElementById("loader").innerHTML = `<h1>${percentage}%</h1>`
            clearInterval(interval);
        }
    }, 150);
}

tl.to("#loader h1", {
    onStart: loadingPercentage(),
})

tl.to("#loader", {
    top: "-100vh",
    delay: 2.5,
    duration: 1.5
})

// tl.from("#nav #logo, #center, #signup", {
//     y: -100,
//     opacity: 0,
//     duration: 0.75,
//     stagger: 0.5,
// })


tl.from("#left .heading", {
    opacity: 0,
    x: -500,
    stagger: 0.5,
    duration: 1
})

tl.from("#right", {
    scale: 2,
    opacity: 0,
    duration: 1
})

// Page 2 animation
tl.to("#page2 h1", {
    transform: "translateX(-68%)",
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        scrub: 1,
        start: "top 0",
        end: "top -200%",
        pin: true
    }
})