const { users_service } = require("../services");

const signup = async (req, res) => {
  try {
    const response = await users_service.signup(req.body);
    return res.status(201).json({
      success: true,
      message: "User Created Successfully",
      data: response,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Unable to signup user",
      data: {},
      err: error,
    });
  }
};

const login = async (req, res) => {
  try {
    const response = await users_service.login(req.body);
    return res.status(200).json({
      success: true,
      message: "User Login Successful",
      data: response,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Unable to signup user",
      data: {},
      err: error,
    });
  }
};

module.exports = {
  signup,
  login,
};
