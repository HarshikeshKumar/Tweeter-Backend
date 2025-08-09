import express from "express";
import morgan from "morgan";

// Create a app object
const app = express();

app.use(morgan("combined"));

app.get("/ping", (req, res) => {
  return res.json({
    message: "Pong",
  });
});

app.post("/hello", (req, res) => {
  console.log(req.query); // Access Query params
  return res.json({
    message: "World",
  });
});

app.get("/tweets/:tweet_id", (req, res) => {
  console.log(req.params); // Access URL params
  return res.json({
    message: "tweet details",
  });
});

// Define a PORT and attach it to the express app
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
