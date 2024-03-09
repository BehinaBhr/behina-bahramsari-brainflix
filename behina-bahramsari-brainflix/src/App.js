import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Video from "./pages/Video/Video";
import VideoUpload from "./pages/VideoUpload/VideoUpload";
import NotFound from "./pages/NotFound/NotFound";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Video />} />
          <Route path="videos/:videoId" element={<Video />} />
          <Route path="/upload" element={<VideoUpload />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
