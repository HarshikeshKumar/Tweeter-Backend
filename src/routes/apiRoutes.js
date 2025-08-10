import express from "express";
import tweetRouter from "./tweet.js";

const router = express.Router();

router.use("/tweets", tweetRouter); // If the remaining req url starts with /tweets, use tweetRouter

export default router;
