import "./Video.scss";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { BASE_URL } from "../../api-base-url";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import NextVideosList from "../../components/NextVideosList/NextVideosList";
import Error from "../../components/Error/Error";
import axios from "axios";
import { DocumentTitle} from '../../utils/utils';

function Video() {
  DocumentTitle('Video Page');
  const params = useParams();
  const activeVideoId = params.videoId;
  const [videoInfo, setVideoInfo] = useState({});
  const [hasError, setHasError] = useState(false);
  const [triggerRefresh, setTriggerRefresh] = useState(false);

  const fetchVideo = async (videoId) => {
    try {
      const videoDetailsAPI_URL = `${BASE_URL}/videos/${videoId}`;
      const response = await axios.get(videoDetailsAPI_URL);
      setVideoInfo(response.data);
      setHasError(false);
    } catch (error) {
      setHasError(true);
    }
  };

  const fetchDefaultVideo = async () => {
    try {
      const videoListAPI_URL = `${BASE_URL}/videos`;
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
  }, [activeVideoId, triggerRefresh]);

  const triggerMainVideo = () => {
    setTriggerRefresh((prev) => !prev);
  };

  return (
    <main className="video">
      <VideoPlayer videoSrc={videoInfo.video} image={videoInfo.image} />
      <div className="video__body">
        <VideoDetails videoInfo={videoInfo} triggerMainVideo={triggerMainVideo}/>
        <NextVideosList activeVideoId={videoInfo.id} />
      </div>
      {hasError && <Error/>}
    </main>
  );
}

export default Video;
