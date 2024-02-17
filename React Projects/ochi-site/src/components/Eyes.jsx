import { useEffect, useState } from "react";

const Eyes = () => {
    const [angle, setAngle] = useState(0);
    console.log(angle)
    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            // const windowX = window.innerWidth / 2;
            // const windowY = window.innerHeight / 2;
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            const deltaX = mouseX - window.innerWidth / 2;
            const deltaY = mouseY - window.innerHeight / 2;

            const angle = Math.atan2(deltaY, deltaX) * (180/Math.PI);
            setAngle(angle - 180);
        })
    }, [])
    return (
        <>
            <div className="w-full h-screen overflow-hidden">
                <div data-scroll data-scroll-speed= "-0.7" className="relative w-full h-full bg-center bg-cover bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]">
                    <div className="flex gap-10 h-full w-full items-center justify-center">
                        <div className="relative w-[15vw] h-[15vw] bg-zinc-100 rounded-full">
                            <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-[10vw] h-[10vw] bg-zinc-900 rounded-full">
                                <div style={{transform: `translate(-50%, -50%) rotate(${angle}deg)`}} className="line w-full absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] rotate-180 p-1">
                                    <div className="w-7 h-7 rounded-full bg-zinc-100">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative w-[15vw] h-[15vw] bg-zinc-100 rounded-full">
                            <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-[10vw] h-[10vw] bg-zinc-900 rounded-full">
                                <div style={{transform: `translate(-50%, -50%) rotate(${angle}deg)`}} className="line w-full absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] rotate-180 p-1">
                                    <div className="w-7 h-7 rounded-full bg-zinc-100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Eyes;