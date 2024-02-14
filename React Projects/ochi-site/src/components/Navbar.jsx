import Logo from "../assets/ochi-logo.svg";
const Navbar = () => {
    const links = [
        "services",
        "our work",
        "about us",
        "insights",
        "contact us"
    ]
    return (
        <>
            <div className="fixed z-[999] w-full flex items-center justify-between px-12 py-4 bg-zinc-900">
                <img src={Logo} alt="logo" />
                <div className="flex gap-10">
                    {
                        links.map((item, index) => (
                            <a key={index} href="" className={`capitalize ${index === 4 && "ml-28"} font-light`}>{item}</a>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Navbar;