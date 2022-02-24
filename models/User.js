let mongoose = require("mongoose");
let userSchema = new mongoose.Schema(
  {
    fullname: String,
    age: Number,
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("User", userSchema);
