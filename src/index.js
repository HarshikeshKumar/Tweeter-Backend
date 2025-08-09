import express from "express";

// Create a app object
const app = express();

function mid1(req, res, next) {
  console.log("mid1");
  next();
}

function mid2(req, res, next) {
  console.log("mid2");
  next();
}

function mid3(req, res, next) {
  console.log("mid3");
  next();
}

let middlewares = [mid1, mid2, mid3];

app.get("/ping", middlewares, (req, res) => {
  return res.json({
    message: "Pong",
  });
});

app.post("/hello", [mid1, mid3], (req, res) => {
  return res.json({
    message: "World",
  });
});

// Define a PORT and attach it to the express app
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
