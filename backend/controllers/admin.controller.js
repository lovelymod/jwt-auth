import jwt from "jsonwebtoken";

export let users = [
  {
    id: 1,
    username: "admin",
    password: "admin",
  },
];

export const Login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = users.find((user) => user.username === username);

    if (!user) return res.status(401).send("user not found");

    if (user.password !== password)
      return res.status(401).send("passwords do not match");

    const accessToken = jwt.sign(
      { name: user.username, id: user.id },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1m", algorithm: "HS256" }
    );

    return res.status(200).json({
      accessToken,
    });
  } catch (error) {
    console.log(error);
  }
};

export const Test = (req, res) => {
  res.json({ msg: "gong lnw za" });
};
