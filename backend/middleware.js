import jwt from "jsonwebtoken";

export const jwtValidate = (req, res, next) => {
  console.log(req.headers.authorization);
  try {
    if (!req.headers.authorization) return res.sendStatus(401);

    const token = req.headers.authorization;

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) throw new Error(err);
    });
    next();
  } catch (error) {
    return res.sendStatus(403);
  }
};

