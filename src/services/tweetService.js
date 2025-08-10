import { Filter } from "bad-words";
import { createTweet as createTweetRepository } from "../repositories/tweetRepository.js";

export const createTweet = async ({ body }) => {
  // try to find blocked words in the tweet body and if any exists don't create the tweet and return an error message

  const filter = new Filter();

  if (filter.isProfane(body)) {
    console.log(body);
    console.log(filter.clean(body));
    // throw new Error("Tweet contains blocked words");
    throw {
      message: "Tweet contains blocked words",
      status: 400,
    };
  }

  // Agar blocked words nhi hai toh repository layer ko call krr do
  const tweet = await createTweetRepository({ body });
  return tweet;
};
