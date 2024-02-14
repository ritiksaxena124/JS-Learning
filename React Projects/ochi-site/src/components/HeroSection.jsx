const HeroSection = () => {
    return (
        <>
            <div className="px-12 w-full h-screen pt-1">
                <div className="text-structure mt-40">
                    <div className="masker">
                        <h1 className="uppercase font-semibold text-[7vw] leading-[6.5vw] tracking-tighter">We create</h1>
                    </div>

                    <div className="masker">
                        <div className="w-fit flex items-center overflow-hidden">
                            <div className="w-[9.5vw] h-[6vw] rounded-md mr-[1vw] overflow-hidden">
                                <img src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" className="w-full h-full object-cover" />
                            </div>
                            <h1 className="uppercase font-semibold text-[7vw] leading-[6.5vw] tracking-tighter">Eye-opening</h1>
                        </div>
                    </div>

                    <div className="masker">
                        <h1 className="uppercase font-semibold text-[7vw] leading-[6.5vw] tracking-tighter">presentations</h1>
                    </div>
                </div>

                <div className="border-t-2 border-zinc-700 mt-24 flex justify-between items-center py-6">
                    <span>For public and private companies</span>
                    <span>From the first pitch to IPO</span>
                    <button className="px-4 py-2 text-sm rounded-full border border-zinc-400">Start the project</button>
                </div>
            </div>
        </>
    )
}

export default HeroSection;