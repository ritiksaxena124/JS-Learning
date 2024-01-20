gsap.registerPlugin(ScrollTrigger)

const tl = gsap.timeline();

tl.from("#logo-container, #right", {
    opacity: 0,
    y: -100,
    duration: 0.5,
    stagger: 0.5,
})

tl.from(".headings > h1", {
    opacity: 0,
    scale: 0,
    duration: 0.5,
    stagger: 0.5,
})

tl.from("#homemain > h4", {
    x: "-100%",
})

tl.from("#homelast", {
    x: "-100%",
})

tl.from("#slides > h1", {
    x: "-100%",
    scale: 0,
    opacity: 0, 
    scrollTrigger: {
        trigger: "#slides > h1",
        scroller: "body",
        start: "top 95%",
        end: "top 90%",
        scrub: 2
    }
})

tl.from("#slides > p", {
    opacity: 0, 
    scrollTrigger: {
        trigger: "#slides > p",
        scroller: "body",
        start: "top 90%",
        end: "top 80%",
        scrub: 2
    }
})

tl.from("#cards > .card", {
    opacity: 0, 
    duration: 0.5,
    scrollTrigger: {
        trigger: "#cards > .card",
        scroller: "body",
        start: "top 85%",
        end: "top 70%",
        scrub: 2
    }
})