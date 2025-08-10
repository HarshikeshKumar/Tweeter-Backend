import express from "express";
import morgan from "morgan";
import { PORT } from "./config/serverConfig.js";
import tweetRouter from "./routes/tweet.js";

// Create a app object
const app = express();

app.use(morgan("combined"));

app.use(express.json());
app.use(express.urlencoded());
app.use(express.text());

app.use("/tweets", tweetRouter); // http://localhost:3000/tweets

app.get("/", (req, res) => {
  return res.json({
    message: "Welcome to Home Page",
  });
});

app.get("/ping", (req, res) => {
  return res.json({
    message: "Pong",
  });
});

app.all(/.*/, (req, res) => {
  return res.status(404).json({
    message: "Not Found",
  });
});

// Define a PORT and attach it to the express app
app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
