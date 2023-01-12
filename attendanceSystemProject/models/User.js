// Third party library use korte chaile all time require korte hoy:
const { model, Schema } = require("mongoose");

// creating a schema or a prototype:

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 15,
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
    },
  },
  password: {
    type: String,
    required: true,
    minlength: [6, "password is too short"],
  },
  //   nicher roles ti hobe ekti array type tai [] use kora hoise karon user er ekadik role thakte pare like : admin,student
  roles: {
    type: [String],
    required: true,
    default: ["STUDENT"],
  },
  accountStatus: {
    type: String,
    enum: ["PENDING", "ACTIVE", "REJECTED"],
    default: "PENDING",
    required: true,
  },
});

const User = model("User", userSchema);
// exporting this User.js file because we use this file in the different file also:
module.exports = User;
