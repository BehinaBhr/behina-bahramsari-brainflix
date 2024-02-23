import "./VideoDetails.scss";
import viewicone from "../../assets/icons/views.svg";
import likeicone from "../../assets/icons/likes.svg";

function VideoDetails({ video}) {
    const { title, channel, timestamp, views, likes, description, comments } = video;
    function formattedDate(timestamp) {
        let date = new Date(timestamp);
        console.log(date);
        let y = date.getFullYear();
        let m = date.getMonth() + 1;
        let d = date.getDate();
        return `${m}/${d}/${y}`;
      }

    return (
        <section className="video-details">
            <h1 className="video-details__title">Tech Trends: {title}</h1>

            <div className="video-details__subtitle">
                <div className="channel-time-wrapper">
                    <div>By {channel}</div>
                    <div>{formattedDate(timestamp)}</div>
                </div>

                <div className="view-like-wrapper">
                    <img className="views__icon" src={viewicone } alt="Views Icon" /> {views}
                    <img className="likes__icon" src={likeicone} alt="Likes Icon" /> {likes}
                </div>
            </div>

            <div className="video-details__info">{description}</div>

            <div className="video-details__footer">{comments?.length || 0} Comments</div>
        
        </section>
    );
}

export default VideoDetails;
