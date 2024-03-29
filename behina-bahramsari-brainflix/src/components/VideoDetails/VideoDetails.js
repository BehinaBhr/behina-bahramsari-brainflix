import "./VideoDetails.scss";
import viewicone from "../../assets/icons/views.svg";
import likeicone from "../../assets/icons/likes.svg";
import CommentSection from "../CommentSection/CommentSection";
import {timestampToDate} from '../../utils/utils';

// for displaying detailed information about a video below the player
function VideoDetails({ videoInfo, triggerMainVideo }) {
  const { title, channel, timestamp, views, likes, description, comments } = videoInfo;

  return (
    <section className="video-details">
      <h1 className="video-details__title">
        <span>Tech Trends: </span>
        {title}
      </h1>

      <div className="video-details__info">
        <div className="video-details__info-section">
          <div className="video-details__channel">By {channel}</div>
          <div className="video-details__date">
            <div className="date">{timestampToDate(timestamp)}</div>
          </div>
        </div>
        <div className="video-details__info-section">
          <div className="video-details__views">
            <img
              className="video-details__like-icon"
              src={viewicone}
              alt="Views Icon"
            />
            {views}
          </div>
          <div className="video-details__likes">
            <img
              className="video-details__like-icon"
              src={likeicone}
              alt="Likes Icon"
            />
            {likes}
          </div>
        </div>
      </div>

      <div className="video-details__description">{description}</div>

      <div className="video-details__comments-counter">
        {comments?.length || 0} Comments
      </div>
      <CommentSection commentsList={comments} activeVideoId={videoInfo.id} triggerMainVideo={triggerMainVideo}/>
    </section>
  );
}

export default VideoDetails;
