const { commentModel, postModel, userModel } = require("../db");
const jwt = require("jsonwebtoken");

const createComment = async (token, postId, comment) => {
  const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

  if (!token || !decodedToken.id) {
    return { error: "token missing or invalid" };
  }

  const user = await userModel.findById(decodedToken.id);
  comment.user = user._id;

  return commentModel.create(comment).then(docComment => {
    return postModel.findByIdAndUpdate(
      postId,
      { $push: { comments: docComment._id } },
      { new: true, useFindAndModify: false }
    );
  });
};

const deleteComment = async (token, id) => {
  const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

  if (!token || !decodedToken.id) {
    throw new Error("User not authorized to delete this comment");
  }

  const comment = await commentModel.findById(id).populate("user");

  if (String(comment.user._id) !== String(decodedToken.id)) {
    throw new Error("User not authorized to delete this comment");
  }

  return await commentModel.findByIdAndDelete(comment._id);
};

module.exports = { createComment, deleteComment };
