import { useState, useEffect } from "react"

function Navbar() {
    const [searchText, setSearchText] = useState("");
    // Debouncing - Used to reduce the number of API calls
    useEffect(() => {
        const timer = setTimeout(() => {
            console.log(searchText);
        }, 200)

        return () => clearTimeout(timer)
    }, [searchText])

    return (
        <>
            <div className="flex justify-between py-6 px-10">
                <div className="flex gap-4 items-center">
                    <div className="w-6">
                        <img src="https://cdn.icon-icons.com/icons2/3629/PNG/512/horizontal_menu_burger_icon_227407.png" alt="" />
                    </div>
                    <div className="w-28">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlHMUb8U4VeW2y-RflH7U7Yp0tsx1hJv0PwQ&usqp=CAU" alt="" />
                    </div>
                </div>
                <div className="flex w-1/2">
                    <input type="text" placeholder="Search" value={searchText} onChange={e => setSearchText(e.target.value)} className="w-full border px-3 rounded-l-full indent-2.5" />
                    <button className="rounded-r-full border py-2 px-3 bg-gray-200">
                        <img className="h-7 w-8 rounded-full" src="https://w7.pngwing.com/pngs/739/993/png-transparent-computer-icons-google-search-search-miscellaneous-desktop-wallpaper-android.png" alt="" />
                    </button>
                </div>
                <div>
                    <img className=" w-12 h-12 rounded-full object-cover" src="https://cdn.dribbble.com/users/3734064/screenshots/14348087/media/a99ab961c8f8c7d29b5f7136e0b19ca4.png" alt="" />
                </div>
            </div>
        </>
    )
}

export default Navbar