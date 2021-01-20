const { commentModel, postModel, userModel } = require("../db");
const jwt = require("jsonwebtoken");

const createComment = async (token, postId, comment) => {
  const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
  if (!token || !decodedToken.id) {
    return { error: "token missing or invalid" };
  }
  const user = await userModel.findById(decodedToken.id);
  comment.user = user;

  return await commentModel.create(comment).then(docComment => {
    return postModel.findByIdAndUpdate(
      postId,
      { $push: { comments: docComment._id } },
      { new: true, useFindAndModify: false }
    );
  });
};

module.exports = { createComment };
