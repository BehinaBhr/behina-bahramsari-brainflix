import "./NextVideosList.scss";
import NextVideoItem from "../NextVideoItem/NextVideoItem";
import { useState, useEffect } from "react";
import { BASE_URL } from "../../api-base-url";
import axios from "axios";

// for displaying a list of next videos
function NextVideosList({ activeVideoId }) {
  const [videos, setVideos] = useState([]);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const videosAPI_URL = `${BASE_URL}/videos`;

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
