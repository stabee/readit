const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }]
});

userSchema.pre("save", async function(next) {
  const hash = await bcrypt.hash(this.password, 10);

  this.password = hash;
  next();
});

const User = mongoose.model("User", userSchema);
module.exports = User;
