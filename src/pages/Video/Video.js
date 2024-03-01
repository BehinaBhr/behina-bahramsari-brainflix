import "./Video.scss";
// import { useState } from "react";
// import videos from "./data/videos.json";
// import videoDetails from "../data/video-details.json";

// import Header from "../../components/Header/Header.js";
// import VideoDetails from "./components/VideoDetails/VideoDetails.js";
// import VideoPlayer from "./components/VideoPlayer/VideoPlayer.js";
// import NextVideosList from "../../components/NextVideosList/NextVideosList.js";

function Video() {
  // const [activeVideoId, setActiveVideoID] = useState('videoDetails[0]');

  // function updateActiveVideo(clickedId) {
  //   setActiveVideoID(clickedId);
  // }

  return (
    <div className="video">
      {/* <VideoPlayer videoSrc={activeVideo.video} image={activeVideo.image} /> */}
      <main className="video__body">
        HELLO VIDEO
        {/* <VideoDetails videoInfo={activeVideo} /> */}
        {/* <NextVideosList activeVideoId={activeVideoId} /> */}
      </main>
    </div>
  );
}

export default Video;
