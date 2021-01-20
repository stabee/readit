const { userService } = require("../services");

const login = async (request, response) => {
  try {
    const userInfo = await userService.login(
      request.body.username,
      request.body.password
    );

    if (userInfo.error) {
      throw new Error(userInfo.error.message);
    }

    response.json({
      username: userInfo.username,
      token: userInfo.token
    });
  } catch (e) {
    response.status(401).json({
      error: e.message
    });
  }
};

const signup = async (request, response) => {
  try {
    const user = await userService.signup(
      request.body.username,
      request.body.password
    );
    response.json({
      user
    });
  } catch (e) {
    return response.status(401).json({
      error: "Something went wrong"
    });
  }
};

module.exports = {
  login,
  signup
};
