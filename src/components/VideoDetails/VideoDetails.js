import "./VideoDetails.scss";
import viewicone from "../../assets/icons/views.svg";
import likeicone from "../../assets/icons/likes.svg";

function VideoDetails({ videoInfo }) {
  const {
    title,
    image,
    video,
    channel,
    timestamp,
    views,
    likes,
    description,
    comments,
  } = videoInfo;
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
      <div className="video-details__hero">
        <video controls className="video-details__player" poster={image}>
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <h1 className="video-details__title">Tech Trends: {title}</h1>

      <div className="video-details__info">
        <div className="video-details__info-section">
          <div className="video-details__channel">By {channel}</div>
          <div className="video-details__date">{formattedDate(timestamp)}</div>
        </div>

        <div className="video-details__info-section">
          <div className="video-details__veiws">
            <img
              className="video-details__like-icon"
              src={viewicone}
              alt="Views Icon"
            />{" "}
            {views}{" "}
          </div>
          <div className="video-details__likes">
            <img
              className="video-details__like-icon"
              src={likeicone}
              alt="Likes Icon"
            />{" "}
            {likes}
          </div>
        </div>
      </div>

      <div className="video-details__description">{description}</div>

      <div className="video-details__comments-counter">
        {comments?.length || 0} Comments
      </div>
    </section>
  );
}

export default VideoDetails;
