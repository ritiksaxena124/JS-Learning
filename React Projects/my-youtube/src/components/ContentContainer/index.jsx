import { Link } from "react-router-dom";
import { YOUTUBE_VIDEO_LIST_API } from "../../utils/constants";
import { useEffect, useState } from "react";


function ContentContainer() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetchVideos();
    }, [])

    async function fetchVideos() {
        const res = await fetch(YOUTUBE_VIDEO_LIST_API);
        const data = await res.json();
        setVideos(data.items);
    }

    return (
        <>
            <div className="px-8 w-full h-screen">
                <div className="space-x-2">
                    <button className="py-2 px-4 bg-gray-900 rounded text-xs text-white">All</button>
                    <button className="py-2 px-4 bg-gray-100 rounded text-xs">Buttons</button>
                    <button className="py-2 px-4 bg-gray-100 rounded text-xs">Buttons</button>
                    <button className="py-2 px-4 bg-gray-100 rounded text-xs">Buttons</button>
                    <button className="py-2 px-4 bg-gray-100 rounded text-xs">Buttons</button>
                    <button className="py-2 px-4 bg-gray-100 rounded text-xs">Buttons</button>
                    <button className="py-2 px-4 bg-gray-100 rounded text-xs">Buttons</button>
                </div>
                <div className="pt-4 h-screen mt-2 grid grid-cols-4 gap-x-4 gap-y-8">
                    {
                        videos.map(video => {
                            return (
                                <Link to={`/watch?v=${video.id}`} key={video.id}>
                                    <div className="w-full h-full cursor-pointer rounded-md hover:bg-gray-100">
                                        <img src={video.snippet.thumbnails.medium.url} alt="thumbnail" className="rounded-md" />
                                        <h3 className="text-base font-semibold mt-3 p-2">{video.snippet.title}</h3>
                                        <p className="text-sm text-ellipsis px-2 pb-4 text-gray-600">{video.snippet.channelTitle}</p>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default ContentContainer