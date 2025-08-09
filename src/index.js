import express from "express";

// Create a app object
const app = express();

// Define a PORT and attach it to the express app
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
