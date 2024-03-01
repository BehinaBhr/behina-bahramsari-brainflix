import "./Home.scss";
import { useState, useEffect } from "react";
// import Video from "../../pages/Video/Video";
// import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
// import NextVideosList from "../../components/NextVideosList/NextVideosList.js";
import axios from "axios";
import { Navigate } from "react-router-dom";

function Home() {
  const [defaultVideoId, setDefaultVideoId] = useState("");
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const api_url =
      "https://unit-3-project-api-0a5620414506.herokuapp.com/videos";
    const api_key = "1bd38d36-1da0-41c5-9422-56595e6a69d0";
    const videoDetailsAPI_URL = `${api_url}?api_key=${api_key}`;

    const fetchVideos = async () => {
      try {
        const response = await axios.get(videoDetailsAPI_URL);

        setDefaultVideoId(response.data[0].id);
        setHasError(false);
      } catch (error) {
        setHasError(true);
      }
    };

    //   fetchVideos();
    // }, [defaultVideoId]);
    if (!defaultVideoId) {
      fetchVideos();
    }
  }, [defaultVideoId]);

  return (
    <div className="home">
      {/* <VideoPlayer videoSrc={activeVideo.video} image={activeVideo.image} /> */}
      {/* <main className="home__body"> */}
      {/* <Navigate to={`/videos/${defaultVideoId}`}/> */}
      {defaultVideoId && <Navigate to={`/videos/${defaultVideoId}`} />}
      {/* <NextVideosList activeVideoId={defaultVideoId}/> */}
      {/* </main> */}
    </div>
  );
}

export default Home;
