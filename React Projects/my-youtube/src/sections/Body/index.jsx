import Sidebar from "../../components/Sidebar";
import { Outlet } from "react-router-dom";

function Body() {
    return (
        <>
            <div className="flex px-10">
                <Sidebar />
                <Outlet />
            </div>
        </>
    )
}

export default Body;