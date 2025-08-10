export const createMannualValidator = (req, res, next) => {
  if (!req.body.tweet) {
    return res.status(400).json({
      error: "Tweet required",
    });
  }
  next();
};
