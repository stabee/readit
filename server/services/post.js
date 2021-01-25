const { postModel, userModel } = require("../db");
const jwt = require("jsonwebtoken");

const getAllPosts = async token => {
  let decodedToken;

  if (token) {
    decodedToken = await jwt.verify(token, process.env.JWT_SECRET);
  }

  const posts = await postModel.find({}).populate("user");
  if (!token || !decodedToken.id) {
    posts.forEach(post => {
      post.user.username = "Anonymous";
    });
  }

  return posts;
};

const getOnePost = async (token, id) => {
  let decodedToken;

  if (token) {
    decodedToken = await jwt.verify(token, process.env.JWT_SECRET);
  }

  const post = await postModel
    .findById({ _id: id })
    .populate({
      path: "comments",
      populate: {
        path: "user",
        select: { _id: 1, username: 1 }
      }
    })
    .populate("user");

  if (!token || !decodedToken.id) {
    post.user.username = "Anonymous";
    post.comments.forEach(comment => {
      comment.user.username = "Anonymous";
    });
  }

  return post;
};

const createPost = async (title, body, token) => {
  let decodedToken;

  if (token) {
    decodedToken = await jwt.verify(token, process.env.JWT_SECRET);
  }

  if (!token || !decodedToken.id) {
    throw new Error("User not authorized to create a post");
  }

  const user = await userModel.findById(decodedToken.id);

  postModel.create(
    {
      title,
      body,
      user
    },
    function(err, post) {
      if (err) console.log(err);
      console.log(post);
      return post;
    }
  );
};

module.exports = { getAllPosts, getOnePost, createPost };
