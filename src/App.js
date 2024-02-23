import './App.scss';
import { useState } from "react";
import videoslist from "./data/videos.json";
import videos from "./data/video-details.json";

import Header from "./components/Header/Header.js";
import VideoDetails from "./components/VideoDetails/VideoDetails.js";

function App() {
  const activevideo = videos[0];
  return (
    <div className="App">
      <Header />
      <VideoDetails video={activevideo}/>
    </div>
  );
}

export default App;
