import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  return res.json({
    message: "Comment routes",
  });
});

router.get("/:id", (req, res) => {
  return res.json({
    message: "comment routes with id",
    id: req.params.id,
  });
});

export default router;
