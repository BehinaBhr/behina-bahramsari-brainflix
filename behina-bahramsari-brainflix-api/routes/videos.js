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
    const {
      title,
      image,
      description,
    } = req.body;
    
    // Set default values for missing data
    const defaultValues = {
      channel: "Anonymous",
      views: 0,
      likes: 0,
      duration: "00:00",
      video: "",
      comments: [],
    };
    const videos = getVideos();
    const newVideo = {
      id: uuidv4(),
      title,
      description,
      image,
      ...defaultValues,
      timestamp: Date.now(),
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

// Add Comment to activeVideo:
router
  .route("/:videoId/comments")
  .post((req, res) => {
    const videoId = req.params.videoId;
    const { name, comment } = req.body;

    const videos = getVideos();

    const foundVideo = videos.find((video) => video.id === videoId);

    if (!foundVideo) {
      return res.status(404).json({ error: "Video not found" });
    }

    const newComment = {
      id: uuidv4(),
      name,
      comment,
      timestamp: Date.now(),
    };

    foundVideo.comments.push(newComment);
    setVideos(videos);

    res.status(201).json(newComment);
  })

// Delete specific comment of activeVideo:
  router
  .route("/:videoId/comments/:commentId")
  .delete((req, res) => {
    const videoId = req.params.videoId;
    const commentId = req.params.commentId;

    const videos = getVideos();

    const foundVideo = videos.find((video) => video.id === videoId);

    if (!foundVideo) {
      return res.status(404).json({ error: "Video not found" });
    }

    const commentIndex = foundVideo.comments.findIndex(
      (comment) => comment.id === commentId
    );

    if (commentIndex === -1) {
      return res.status(404).json({ error: "Comment not found" });
    }

    const deletedComment = foundVideo.comments.splice(commentIndex, 1)[0];
    setVideos(videos);

    res.status(200).json(deletedComment);
  });
module.exports = router;
