import express from "express";
import {
  createTweet,
  getTweet,
  getTweetById,
} from "../../controllers/tweetController.js";
import { createMannualValidator } from "../../validators/tweetMannualValidator.js";

const router = express.Router(); // Create a Router Object

router.get("/", getTweet);

router.get("/:id", getTweetById);

router.post("/", createMannualValidator, createTweet);

export default router;
