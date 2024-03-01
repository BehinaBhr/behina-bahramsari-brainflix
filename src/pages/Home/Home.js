import "./Home.scss";
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
