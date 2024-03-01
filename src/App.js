import "./App.scss";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import Video from "./pages/Video/Video";
import NotFound from "./pages/NotFound/NotFound";
import Header from "./components/Header/Header"
// import Contestant from "./pages/Contestant/Contestant";
// import NavigateHookExample from "./pages/NavigateHookExample/NavigateHookExample";
// const api_url ="https://unit-3-project-api-0a5620414506.herokuapp.com/videos";
// const api_key= "1bd38d36-1da0-41c5-9422-56595e6a69d0";
// const videoDetailsAPI_URL = `${api_url}/${clickedId}?api_key=${api_key}`
// const videosAPI_URL = `${api_url}?api_key=${api_key}"`;
// const videosAPI_URL = "https://unit-3-project-api-0a5620414506.herokuapp.com/videos?api_key=1bd38d36-1da0-41c5-9422-56595e6a69d0"
// import videoDetails from "./data/video-details.json";
// const videoDetailsAPI_URL = "https://unit-3-project-api-0a5620414506.herokuapp.com/videos/84e96018-4022-434e-80bf-000ce4cd12b8"
// const videoDetailsAPI_URL = `${api_url}/${clickedId}?api_key=${api_key}`

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="videos/:videoId" element={<Video />} />

          {/* <Route path="/view-contestants" element={ <Navigate to="/contestants" />} /> 

          <Route path="/use-navigate" element={<NavigateHookExample />} /> */}
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
