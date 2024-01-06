const rect = document.querySelector("#rectangle");


rect.addEventListener("mousemove", (e) => {
    const rectDimension = rect.getBoundingClientRect();
    const width = rectDimension.width
    const cursorPosInsideRect = e.clientX - rectDimension.left;
    if(cursorPosInsideRect < width / 2) {
       const redColor = gsap.utils.mapRange(0, width / 2, 255, 0, cursorPosInsideRect);

       gsap.to(rect, {
            backgroundColor: `rgb(${redColor}, 0, 0)`
       })
    }else{
        const blueColor = gsap.utils.mapRange(width/2, width, 0, 255, cursorPosInsideRect);

        gsap.to(rect, {
             backgroundColor: `rgb(0, 0, ${blueColor})`
        })
    }
})


rect.addEventListener("mouseleave", (e) => {
    gsap.to(rect, {
        backgroundColor: "white"
    })
})