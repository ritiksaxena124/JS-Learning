import { useSearchParams } from "react-router-dom";
import LiveChat from "../../components/LiveChat";

function WatchVideoPage() {
    const [searchParams] = useSearchParams();
    let videoID = searchParams.get("v");
    return (
        <>
            <div className="pl-8 flex w-full h-fit">
                <div>
                    <iframe width="900" height="450" src={`https://www.youtube.com/embed/${videoID}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                <div className="w-full h-full">
                    <LiveChat />
                </div>
            </div>
        </>
    )
}

export default WatchVideoPage;