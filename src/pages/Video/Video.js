import "./Video.scss";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import NextVideosList from "../../components/NextVideosList/NextVideosList";
import Error from "../../components/Error/Error";
import axios from "axios";
import DocumentTitle from '../../components/DocumentTitle/DocumentTitle';


function Video() {
  DocumentTitle('Video Page');
  const params = useParams();
  const activeVideoId = params.videoId;
  const [videoInfo, setVideoInfo] = useState({});
  const [hasError, setHasError] = useState(false);

  const api_url =
    "https://unit-3-project-api-0a5620414506.herokuapp.com/videos";
  const api_key = "1bd38d36-1da0-41c5-9422-56595e6a69d0";

  const fetchVideo = async (videoId) => {
    try {
      const videoDetailsAPI_URL = `${api_url}/${videoId}?api_key=${api_key}`;
      const response = await axios.get(videoDetailsAPI_URL);
      setVideoInfo(response.data);
      setHasError(false);
    } catch (error) {
      setHasError(true);
    }
  };

  const fetchDefaultVideo = async () => {
    try {
      const videoListAPI_URL = `${api_url}?api_key=${api_key}`;
      const response = await axios.get(videoListAPI_URL);
      fetchVideo(response.data[0].id);
    } catch (error) {
      setHasError(true);
    }
  };

  useEffect(() => {
    if (activeVideoId !== undefined) {
      fetchVideo(activeVideoId);
    } else {
      fetchDefaultVideo();
    }
  }, [activeVideoId]);

  return (
    <main className="video">
      <VideoPlayer videoSrc={videoInfo.video} image={videoInfo.image} />
      <div className="video__body">
        <VideoDetails videoInfo={videoInfo} />
        <NextVideosList activeVideoId={activeVideoId} />
      </div>
      {hasError && <Error/>}
    </main>
  );
}

export default Video;
