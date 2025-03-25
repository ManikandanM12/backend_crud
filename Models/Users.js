const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email:String,
  roles: String,
});

const UserModel = mongoose.model("Users", userSchema);
module.exports = UserModel;
