const User = require("../models/user");
const CustomError = require("../helpers/CustomError");

class UserService {
  async createUser(data) {
    const user = new User({ username: data});
    let userData = await user.save();
    return userData;
  }

  async getUser(id) {
    const user = User.findById(id);

    return user.username;
  }

  async deleteUser(userId) {
    return await User.findOneAndRemove({ _id: userId });
  }
}
module.exports = new UserService();
