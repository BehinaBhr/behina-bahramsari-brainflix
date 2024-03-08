const express = require("express");
const app = express();

const videosRouter = require('./routes/videos');

require("dotenv").config();

const PORT = process.env.PORT || process.argv[2] || 8080;

app.use(express.json());

// To test our server:
app.get("/", function (req, res) {
  res.send("Hi, welcome to my Brainflix home page on route `/`");
});

app.use('/videos', videosRouter);

app.listen(PORT, () =>
  console.log(`Listening on ${PORT} go to http://localhost:${PORT}/`)
);


