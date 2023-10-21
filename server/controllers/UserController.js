const { User } = require("../models/users");

class UserController {
  static async getUsers(req, res) {
    try {
      const result = await User.findAll();
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  //   static async register() {}
}

module.exports = UserController;
