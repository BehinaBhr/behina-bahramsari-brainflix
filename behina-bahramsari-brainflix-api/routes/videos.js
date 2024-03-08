const express = require("express");
const fs = require("fs");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");

const JSON_FILE_PATH = "./data/videos.json";

// Read an array of videos to the JSON file
function getVideos() {
  const videosJson = fs.readFileSync(JSON_FILE_PATH);
  return JSON.parse(videosJson);
}

// Writes an array of videos to the JSON file
function setVideos(videos) {
  const videosJson = JSON.stringify(videos, null, 2);
  fs.writeFileSync(JSON_FILE_PATH, videosJson);
}

// Middleware to validate POST /videos request
const postValidator = (req, res, next) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res
      .status(400)
      .json({ error: "Title and description are required fields!" });
  }

  next();
};

// Fetch nextVideoslist from Videos Data :
router
  .route("/")
  .get((_req, res) => {
    const videos = getVideos();
    const videosList = videos.map(({ id, title, channel, image }) => ({
      id,
      title,
      channel,
      image,
    }));
    res.status(200).json(videosList);
  })
// Add Video to videosdata in Upload page:
  .post(postValidator, (req, res) => {
    const { title, description } = req.body;
    const videos = getVideos();
    const newVideo = {
      id: uuidv4(),
      title,
      description,
      thumbnail: "../public/Upload-video-preview.jpg", // Hardcoded image path
    };

    videos.push(newVideo);
    setVideos(videos);

    res.status(201).json(newVideo);
  });

// Fetch Video details by ID:
router.route("/:videoId").get((req, res) => {
  const videoId = req.params.videoId;
  const videos = getVideos();

  const foundVideo = videos.find((video) => video.id === videoId);

  if (!foundVideo) {
    return res.status(404).json({ error: "Video not found" });
  }

  res.status(200).json(foundVideo);
});

module.exports = router;
