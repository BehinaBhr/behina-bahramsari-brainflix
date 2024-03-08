import "./VideoPlayer.scss";
import { BASE_URL } from "../../api-base-url";

function VideoPlayer({ videoSrc, image }) {
  return (
    <section className="video-player">
        <video controls poster={ `${BASE_URL}/${image}`}>
          <source src={videoSrc} type="video/mp4" />
        </video>
    </section>
  );
}

export default VideoPlayer;
