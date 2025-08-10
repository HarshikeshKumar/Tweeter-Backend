import express from "express";

const router = express.Router(); // Create a Router Object

router.get("/", (req, res) => {
  return res.json({
    message: "Welcome to tweet route",
  });
});

router.get("/:id", (req, res) => {
  return res.json({
    message: "tweet route with id",
    id: req.params.id,
  });
});

export default router;
