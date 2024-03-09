import "./NextVideoItem.scss";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../api-base-url";

// for displaying a thumbnail, title, and channel of each video in the next video list
function NextVideoItem({ video }) {
  return (
    <li className="next-video-item">
      <Link className="next-video-item__link" to={`/videos/${video.id}`}>
        <img
          className="next-video-item__image"
          src={`${BASE_URL}/${video.image}`}
          alt={video.name}
        />
        <div className="next-video-item__info">
          <div className="next-video-item__title">{video.title}</div>
          <div className="next-video-item__channel">{video.channel}</div>
        </div>
      </Link>
    </li>
  );
}

export default NextVideoItem;
