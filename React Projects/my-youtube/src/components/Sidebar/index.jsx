import { Link } from "react-router-dom"

function Sidebar() {
    return (
        <>
            <div className="h-screen">
                <ul className="space-y-2">
                    <Link to="/">
                        <li className="rounded cursor-pointer py-2 px-4 hover:bg-gray-200">Home</li>
                    </Link>
                    <li className="rounded cursor-pointer py-2 px-4 hover:bg-gray-200">Subscriptions</li>
                    <li className="rounded cursor-pointer py-2 px-4 hover:bg-gray-200">Shorts</li>
                    <li className="rounded cursor-pointer py-2 px-4 hover:bg-gray-200">Your Channel</li>
                    <li className="rounded cursor-pointer py-2 px-4 hover:bg-gray-200">History</li>
                </ul>
            </div>
        </>
    )
}

export default Sidebar