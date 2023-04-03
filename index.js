import express from "express";

const PORT = 3001;

const app = express();

app.get("/", (req, res) => {
  res.send("Im index");
});

app.get("/hello", (req, res) => {
  res.send("Hello there!");
});

app.listen(PORT, () => {
  console.log(`listening on port http://localhost:${PORT}`);
});
