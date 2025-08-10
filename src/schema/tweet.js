import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema({
  body: {
    type: String,
    required: true,
    trim: true,
    maxlength: 280,
  },
});

const Tweet = mongoose.model("Tweet", tweetSchema); //Tweet collection
export default Tweet;
