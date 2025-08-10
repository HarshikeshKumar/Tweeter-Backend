import express from "express";
import {
  createTweet,
  getTweet,
  getTweetById,
} from "../../controllers/tweetController.js";
// import { createMannualValidator } from "../../validators/tweetMannualValidator.js";
import { validate } from "./../../validators/zodValidator.js";
import { tweetZodSchema } from "../../validators/tweetZodSchema.js";

const router = express.Router(); // Create a Router Object

router.get("/", getTweet);

router.get("/:id", getTweetById);

router.post("/", validate(tweetZodSchema), createTweet);

export default router;
