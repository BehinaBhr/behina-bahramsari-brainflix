import './App.scss';
import { useState } from "react";
import videoslist from "./data/videos.json";
import videos from "./data/video-details.json";

import Header from "./components/Header/Header.js";
import VideoDetails from "./components/VideoDetails/VideoDetails.js";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer.js";

function App() {
  // const activeVideo = videos[0];
  const [activeVideo, setActiveVideo] = useState(videos[0]);
  return (
    <div className="app">
      <Header />
      <VideoPlayer video={activeVideo.video} image={activeVideo.image}/>
      <VideoDetails videoInfo={activeVideo}/>
    </div>
  );
}

export default App;
