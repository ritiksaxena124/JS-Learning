const About = () => {
    return (
        <>
            <div data-scroll data-scroll-speed="-0.25" className="w-full bg-[#CDEA68] pt-20 px-20 pb-12 rounded-tl-2xl rounded-tr-2xl">
                <h1 className="text-black text-[3.5vw] tracking-tight leading-[4.5vw] pr-[4vw]">Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
                <div className="w-full flex border-t-2 border-[#A1B562] mt-16 pt-8">
                    <div className="w-full">
                        <h1 className="text-black text-[3vw] leading-1">Our approach:</h1>
                        <div className="w-fit pl-8 pr-7 py-4 mt-3 flex items-center gap-6 text-md rounded-full text-white bg-zinc-900 uppercase">
                           <span className="w-full"> read more </span>
                           <span className="bg-zinc-100 text-black p-1 rounded-full"></span>
                        </div>
                    </div>
                    <div className="w-full rounded-xl overflow-hidden">
                        <img className="w-full h-full object-contain" src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;