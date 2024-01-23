const page1 = document.querySelector("#page1");
const cursor = document.querySelector("#cursor");

gsap.registerPlugin(ScrollTrigger);
function onLoad() {
    LocomotiveScroll();
    cursorAnimation();
    page2Animation();
}

function LocomotiveScroll() {

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}

function cursorAnimation() {
    page1.addEventListener("mousemove", (e) => {
        gsap.to(cursor, {
            x: e.x,
            y: e.y
        })
    })


    page1.addEventListener("mouseenter", (e) => {
        gsap.to(cursor, {
            scale: 1,
            opacity: 1
        })
    })

    page1.addEventListener("mouseleave", (e) => {
        gsap.to(cursor, {
            scale: 0,
            opacity: 0
        })
    })
}


function page2Animation() {
    gsap.from(".elem h1", {
        y: 120,
        stagger: 0.5,
        duration: 1,
        scrollTrigger: {
            trigger: "#page2",
            scroller: "#main",
            markers: true,
            start: "top 77%",
            end: "top 18%",
            scrub: true
        }
    })
}

onLoad();