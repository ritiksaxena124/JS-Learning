import Navbar from "../../sections/Navbar";
import Body from "../../sections/Body";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ContentContainer from "../../components/ContentContainer";
import WatchVideoPage from "../WatchVideoPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Body />,
        children: [{
            path: "/",
            element: <ContentContainer />
        }, {
            path: "watch",
            element: <WatchVideoPage />
        }
        ]
    }
])

function Home() {

    return (
        <>
            <Navbar />
            <RouterProvider router={router} />
        </>
    )
}

export default Home;