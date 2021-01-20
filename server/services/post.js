const { postModel } = require("../db");
const jwt = require("jsonwebtoken");

const getAllPosts = async token => {
  let decodedToken = "";

  if (token) {
    decodedToken = await jwt.verify(token, process.env.JWT_SECRET);
  }

  const posts = await postModel.find({}, "-comments");
  if (!token || !decodedToken.id) {
    posts.forEach(post => {
      post.author = "Anonymous";
    });
  }

  return posts;
};

const getOnePost = async (token, id) => {
  let decodedToken = "";

  if (token) {
    decodedToken = await jwt.verify(token, process.env.JWT_SECRET);
  }

  const post = await postModel.findById({ _id: id }).populate({
    path: "comments",
    populate: {
      path: "user",
      select: { _id: 1, username: 1 }
    }
  });

  if (!token || !decodedToken.id) {
    post.author = "Anonymous";
    post.comments.forEach(comment => {
      comment.user.username = "Anonymous";
    });
  }

  return post;
};

const createPost = async (title, author, body) => {
  postModel.create(
    {
      title,
      author,
      body
    },
    function(err, post) {
      if (err) console.log(err);
      return post;
    }
  );
};

module.exports = { getAllPosts, getOnePost, createPost };
