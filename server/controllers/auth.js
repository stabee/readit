const { userService } = require("../services");
const { body, validationResult } = require("express-validator");

const login = async (request, response) => {
  const results = validationResult(request);
  if (!results.isEmpty()) {
    const errors = results.array({ onlyFirstError: true });
    return response.status(401).json({ errors });
  }
  try {
    const userInfo = await userService.login(
      request.body.username,
      request.body.password
    );

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
  const results = validationResult(request);
  if (!results.isEmpty()) {
    const errors = results.array({ onlyFirstError: true });
    return response.status(401).json({ errors });
  }

  try {
    const user = await userService.signup(
      request.body.username,
      request.body.password
    );
    response.json({
      user
    });
  } catch (e) {
    response.status(401).json({
      errors: [{ msg: e.message }]
    });
  }
};

const validators = signinType => {
  const errors = [
    body("username")
      .isLength({ min: 1 })
      .withMessage("Username must not be blank")
      .isLength({ max: 24 })
      .withMessage("Username cannot be more than 24 characters")
      .matches(/^[a-zA-Z0-9_-]+$/)
      .withMessage("Username must be valid characters"),

    body("password")
      .isLength({ min: 1 })
      .withMessage("Passowrd cannot be blank")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters")
      .isLength({ max: 60 })
      .withMessage("Password cannot be more than 60 characters")
  ];

  if (signinType === "register") {
    errors.push(body("username").custom(userService.userExists));
  }

  return errors;
};

module.exports = {
  login,
  signup,
  validators
};
