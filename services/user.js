const User = require("../db/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (username, password) => {
  try {
    const user = await User.findOne({ username });

    const passwordCorrect =
      user === null ? false : await bcrypt.compare(password, user.password);

    if (!(user && passwordCorrect)) {
      throw new Error("Invalid username or password");
    }

    const userForToken = {
      username: user.username,
      id: user._id
    };

    const token = jwt.sign(userForToken, process.env.JWT_SECRET);

    return {
      token,
      username: user.username
    };
  } catch (e) {
    throw new Error(e.message);
  }
};

const signup = (username, password) => {
  try {
    return User.create({ username, password });
  } catch (e) {
    throw new Error(e.message);
  }
};

const userExists = async username => {
  const exists = await User.findOne({ username });
  if (exists) throw new Error("Username already exists");
};

module.exports = { login, signup, userExists };
