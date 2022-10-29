// Third party library use korte chaile all time require korte hoy:
const { model, Schema } = require("mongoose");

// creating a schema or a prototype:

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,

  //   nicher roles ti hobe ekti array type tai [] use kora hoise karon user er ekadik role thakte pare like : admin,student
  roles: [String],
  accountStatus: String,
});

const User = model("User", userSchema);
// exporting this User.js file because we use this file in the different file also:
module.exports = User;
