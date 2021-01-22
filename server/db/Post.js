const mongoose = require("mongoose");
const { Schema } = mongoose;

const postSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  date: {
    type: Date,
    default: Date.now
  },
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  meta: {
    votes: Number
  }
});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
