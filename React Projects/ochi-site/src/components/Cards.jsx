import Logo from "../assets/ochi-logo.svg";

const Cards = () => {
    return(
        <>
        <div className="w-full h-screen flex gap-5 px-20 mt-20">
            <div className="w-1/2 h-96 bg-[#004D43] rounded-lg flex items-center justify-center ">
                <img src={Logo} alt="" className="w-40" />
            </div>
            <div className="w-1/2 h-96 flex gap-5">
                <div className="h-full w-1/2 bg-[#202020] rounded-lg flex items-center justify-center border-2 border-zinc-600">
                    <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" className="w-40" alt="" />
                </div>
                <div className="h-full w-1/2 bg-[#202020] rounded-lg flex items-center justify-center border-2 border-zinc-600">
                    <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" className="w-40" alt="" />
                </div>
            </div>
        </div>
        </>
    )
}

export default Cards;