import "./Video.scss";
import { useParams } from "react-router-dom";

import { useState, useEffect } from "react";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer"
import NextVideosList from "../../components/NextVideosList/NextVideosList.js";
import axios from "axios"

function Video() {
  const params = useParams();
  const activeVideoId = params.videoId;
  const [videoInfo, setVideoInfo] = useState({});
  const [hasError, setHasError] = useState(false);
    
  useEffect(() => {
    const api_url =
      "https://unit-3-project-api-0a5620414506.herokuapp.com/videos";
    const api_key = "1bd38d36-1da0-41c5-9422-56595e6a69d0";
    const videoDetailsAPI_URL = `${api_url}/${activeVideoId}?api_key=${api_key}`;

    const fetchVideos = async () => {
      try {
        const response = await axios.get(videoDetailsAPI_URL);

        setVideoInfo(response.data);
      } catch (error) {
        setHasError(true);
      }
    };

    fetchVideos();
  }, [videoInfo]);

  return (
    <div className="video">
      <VideoPlayer videoSrc={videoInfo.video} image={videoInfo.image} />
      <main className="video__body">
        <VideoDetails videoInfo={videoInfo} />
        <NextVideosList activeVideoId={activeVideoId} />
      </main>
    </div>
  );
}

export default Video;
