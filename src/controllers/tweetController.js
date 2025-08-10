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
