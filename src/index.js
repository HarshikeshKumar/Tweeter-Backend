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
  return res.json({
    message: "World",
  });
});

// Define a PORT and attach it to the express app
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
