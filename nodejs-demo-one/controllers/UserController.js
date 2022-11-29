const db = require("../configs/db");

const handleHomeRequest = (req, res) => {
  res.send("hello from controller");
};

const createUser = async (req, res) => {
  const User = db.user;

  const { name, email, password } = req.body;

  const newUser = {
    name,
    email,
    password,
  };

  const ifUserExists = await User.findOne({ email });
  if (ifUserExists) return res.status(400).json({ message: "User Exists" });

  const dbResponse = await User.create(newUser);

  res.json(dbResponse);
};

module.exports = { handleHomeRequest, createUser };
