const Featured = () => {
    return (
        <>
            <div className="py-20 mt-10">
                <div className="px-20 border-b-2 border-zinc-700 pb-12">
                    <h1 className="text-6xl  leading-1">Featured projects</h1>
                </div>

                <div className="flex gap-5 px-20 pt-10">
                    <div className="relative w-1/2">
                        <h1 className="absolute left-[90%] top-1/2 -translate-y-[50%] text-[#CDEA68] z-50 font-semibold text-7xl">FYDE</h1>
                        <div className="rounded-2xl overflow-hidden w-full h-full hover:scale-95">
                            <img className="w-full h-full object-cover" src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                        </div>
                    </div>
                    <div className="relative w-1/2">
                        <h1 className="absolute right-[90%] top-1/2 -translate-y-[50%] z-50 text-[#CDEA68] font-semibold text-7xl">VISE</h1>
                        <div className="rounded-2xl overflow-hidden w-full h-full hover:scale-95">
                            <img className="w-full h-full object-cover" src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                        </div>
                    </div>
                </div>

                <div className="flex gap-5 px-20 pt-10">
                    <div className="relative w-1/2">
                        <h1 className="absolute left-[90%] top-1/2 -translate-y-[50%] text-[#CDEA68] z-50 font-semibold text-7xl">TRAWA</h1>
                        <div className="rounded-2xl overflow-hidden w-full h-full hover:scale-95">
                            <img className="w-full h-full object-cover" src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg" alt="" />
                        </div>
                    </div>
                    <div className="relative w-1/2">
                        <h1 className="absolute right-[55%] top-1/2 -translate-y-[50%] z-50 text-[#CDEA68] font-semibold text-7xl whitespace-nowrap">PREMIUM BLEND</h1>
                        <div className="rounded-2xl overflow-hidden w-full h-full hover:scale-95">
                            <img className="w-full h-full object-cover" src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png" alt="" />
                        </div>
                    </div>
                </div>

                <div className="w-full mt-20 flex justify-center">
                    <div className="w-fit pl-8 pr-7 py-4 mt-3 flex items-center gap-6 text-md rounded-full text-white bg-zinc-900 uppercase">
                    <span className="w-full"> view all case studies </span>
                    <span className="bg-zinc-100 text-black p-1 rounded-full"></span>
                </div></div>
            </div>
        </>
    )
}

export default Featured;