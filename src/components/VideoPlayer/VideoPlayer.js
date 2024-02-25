import "./VideoPlayer.scss";

function VideoPlayer({ videoSrc, image }) {
  return (
    <section className="video-player">
        <video controls poster={image}>
          <source src={videoSrc} type="video/mp4" />
        </video>
    </section>
  );
}

export default VideoPlayer;
