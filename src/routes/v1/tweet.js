import express from "express";
import { getTweet, getTweetById } from "../../controllers/tweetController.js";

const router = express.Router(); // Create a Router Object

router.get("/", getTweet);

router.get("/:id", getTweetById);

export default router;
