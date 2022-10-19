const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const categoris = require("./data/Catagoris.json");
const post = require("./data/post.json");
app.get("/", (req, res) => {
  res.send("news api rouning");
});
app.get("/post-of-details", (req, res) => {
  res.send(post);
});
app.get("/news-cataroris", (req, res) => {
  res.send(categoris);
});

app.listen(port, () => {
  console.log("my side");
});
