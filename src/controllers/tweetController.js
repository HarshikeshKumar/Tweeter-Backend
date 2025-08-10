import { createTweet as createTweetService } from "../services/tweetService.js";

export const getTweet = (req, res) => {
  return res.json({
    message: "Welcome to tweet routes",
  });
};

export const getTweetById = (req, res) => {
  return res.json({
    message: "tweets route with id",
    id: req.params.id,
  });
};

export const createTweet = async (req, res) => {
  try {
    const response = await createTweetService({
      body: req.body.body,
    });
    return res.status(201).json({
      success: true,
      data: response,
      message: "Tweet created Successfully",
    });
  } catch (error) {
    if (error.status) {
      return res.status(error.status).json({
        message: error.message,
        success: false,
      });
    }
    console.log(error);
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};
