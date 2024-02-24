import "./NextVideosList.scss";
import NextVideoItem from "../NextVideoItem/NextVideoItem";

function NextVideosList( { videos, updateActiveVideo } ) {
    return (
        <ul className="next-videos-list">
            {videos.map((video) => {
                return (
                    <NextVideoItem 
                        key={video.id}
                        video={video}
                        updateActiveVideo={updateActiveVideo}
                    />
                )
            })}
        </ul>
    );
}

export default NextVideosList;