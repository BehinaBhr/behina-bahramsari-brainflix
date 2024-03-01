import "./Home.scss";
// import { useState } from "react";
// import videos from "./data/videos.json";
// import videoDetails from "../data/video-details.json";

// import Header from "../../components/Header/Header.js";
// import VideoDetails from "./components/VideoDetails/VideoDetails.js";
// import VideoPlayer from "./components/VideoPlayer/VideoPlayer.js";
import NextVideosList from "../../components/NextVideosList/NextVideosList";

function Home() {
  // const [activeVideoId, setActiveVideoID] = useState('videoDetails[0]');

  // function updateActiveVideo(clickedId) {
  //   setActiveVideoID(clickedId);
  // }

  return (
    <div className="home">
      {/* <VideoPlayer videoSrc={activeVideo.video} image={activeVideo.image} /> */}
      <main className="home__body">
        {/* <VideoDetails videoInfo={activeVideo} /> */}
        <NextVideosList />
      </main>
    </div>
  );
}

export default Home;
