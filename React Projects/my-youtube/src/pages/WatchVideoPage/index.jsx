import { useSearchParams } from "react-router-dom";

function WatchVideoPage() {
    const [searchParams] = useSearchParams();
    let videoID = searchParams.get("v");
    return (
        <>
        <div className="pl-8">
            <iframe width="800" height="415" src={`https://www.youtube.com/embed/${videoID}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
        </>
    )
}

export default WatchVideoPage;