const body = document.querySelector("body");

const imageCollection = [
    "https://images.unsplash.com/photo-1704377133466-784bc482e366?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1704031456784-1bf65f7c9466?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1704137994759-299392e16951?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1704044843056-f58d8c147f88?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1679756099079-84d8ab833a3f?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1682687980961-78fa83781450?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1703842184292-578efd933bbd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1704221242538-8cd3278fac50?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
]

function throttleFunc(func, delay) {
    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();

        if (now - prev > delay) {
            prev = now;
            return func(...args);
        }
    }
}


function showCards(e) {
    const card = document.createElement("div");
    // Adding styles to the card created above
    card.style.width = "210px";
    card.style.height = "300px";
    card.style.position = "absolute";
    card.style.left = `${e.clientX}px`;
    card.style.top = `${e.clientY}px`;
    card.style.overflow = "hidden";
    card.style.borderRadius = "0.25rem";

    // Creating image element and styling it
    const img = document.createElement("img");
    img.setAttribute("src", imageCollection[Math.floor(Math.random() * imageCollection.length)]);

    img.style.width = "100%";
    img.style.height = "100%";
    img.style.objectFit = "cover";
    img.style.transform = "translateY(100%)";
    img.style.borderRadius = "0.25rem";

    card.appendChild(img);



    document.body.appendChild(card)


    gsap.to(img, {
        y: "0",
        ease: Power3,
        duration: 0.5
    })

    gsap.to(img, {
        y: "100%",
        ease: Power2,
        delay: 0.6,
        duration: 0.5
    })

    setTimeout(() => {
        card.remove();
    }, 1200);
}


body.addEventListener("mousemove", throttleFunc((e) => {
    // your code here
    showCards(e);
}, 300))