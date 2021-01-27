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
  voteCount: {
    type: Number,
    default: 0
  },
  votes: [{ user: Schema.Types.Object, vote: Number, _id: false }],
  views: {
    type: Number,
    default: 0
  },
  category: {
    type: String,
    enum: ["programming", "music", "news", "books", "tv", "funny"]
  }
});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
