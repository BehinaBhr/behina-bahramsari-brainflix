import "./NextVideoItem.scss";
import { Link } from "react-router-dom";

function NextVideoItem({ video }) {
  return (
    <li className="next-video-item">
      <Link className="next-video-item__link" to={`/videos/${video.id}`}>
        <img
          className="next-video-item__image"
          src={video.image}
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
