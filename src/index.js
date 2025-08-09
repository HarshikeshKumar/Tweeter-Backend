import express from "express";

// Create a app object
const app = express();

app.get("/ping", (req, res) => {
  return res.json({
    message: "Pong",
  });
});

// Define a PORT and attach it to the express app
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
