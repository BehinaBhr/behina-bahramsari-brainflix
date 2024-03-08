import "./NextVideosList.scss";
import NextVideoItem from "../NextVideoItem/NextVideoItem";
import { useState, useEffect } from "react";
import axios from "axios";

function NextVideosList({ activeVideoId }) {
  const [videos, setVideos] = useState([]);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const api_url =  "https://unit-3-project-api-0a5620414506.herokuapp.com/videos";
    const api_key = "1bd38d36-1da0-41c5-9422-56595e6a69d0";
    const videosAPI_URL = `${api_url}?api_key=${api_key}`;

    const fetchVideos = async () => {
      try {
        const response = await axios.get(videosAPI_URL);
        const videos = response.data;
        const filteredVideosList = videos.filter(
          (video) => video.id !== activeVideoId
        );
        setVideos(filteredVideosList);
      } catch (error) {
        setHasError(true);
      }
    };

    fetchVideos();
  }, [activeVideoId]);

  if (hasError) {
    return <p>Unable to access videos right now. Please try again later.</p>;
  }

  if (videos.length === 0) {
    return <p>No videos available</p>;
  }

  return (
    <section className="next-videos-list">
      <h3 className="next-videos-list__title">NEXT VIDEOS</h3>
      <ul className="next-videos-list__body">
        {videos.map((video) => {
          return <NextVideoItem key={video.id} video={video} />;
        })}
      </ul>
    </section>
  );
}

export default NextVideosList;