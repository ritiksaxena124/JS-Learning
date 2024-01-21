const page1 = document.querySelector("#page1");
const cursor = document.querySelector("#cursor");

function onLoad() {
    cursorAnimation();
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


onLoad();
