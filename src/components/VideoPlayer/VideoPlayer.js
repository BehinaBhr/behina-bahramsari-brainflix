import "./VideoPlayer.scss";

function VideoPlayer({ video, image }) {
  return (
    <section className="video-player">
        <video controls poster={image}>
          <source src={video} type="video/mp4" />
        </video>
    </section>
  );
}

export default VideoPlayer;
