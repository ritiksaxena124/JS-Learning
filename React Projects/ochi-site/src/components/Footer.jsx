import Logo from "../assets/ochi-logo.svg";
const Footer = () => {
    return (
        <>
            <div className="flex px-20 w-full h-screen gap-10">
                <div className="w-1/2 h-full flex flex-col justify-between">
                    <div>
                        <h1 className="text-[5vw] leading-none uppercase">eye-</h1>
                        <h1 className="text-[5vw] leading-none uppercase">opening</h1>
                    </div>
                    <img className="w-20" src={Logo} alt="" />
                </div>
                <div className="w-1/2 h-full"><h1 className="text-[5vw] leading-none uppercase">presentations</h1></div>
            </div>
        </>
    )
}

export default Footer;