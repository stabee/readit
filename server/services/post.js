const { postModel, userModel } = require("../db");
const jwt = require("jsonwebtoken");

const getAllPosts = async (token, category, username) => {
  let decodedToken;

  if (token) {
    decodedToken = await jwt.verify(token, process.env.JWT_SECRET);
  }

  let posts;
  if (category) {
    posts = await postModel
      .find({ category })
      .populate("user")
      .sort("-voteCount")
      .lean();
  } else if (username) {
    const user = await userModel.findOne({ username });
    posts = await postModel
      .find({ user: user._id })
      .populate("user")
      .sort("-voteCount")
      .lean();
  } else {
    posts = await postModel
      .find({})
      .populate("user")
      .sort("-voteCount")
      .lean();
  }

  if (!token || !decodedToken.id) {
    posts.forEach(post => {
      post.user.username = "Anonymous";
      post.userVoteValue = 0;
    });
  } else {
    posts.map(post => {
      const userVote = post.votes.find(vote => vote.user === decodedToken.id);
      if (userVote) {
        post.userVoteValue = userVote.vote;
      } else {
        post.userVoteValue = 0;
      }
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
    .populate("user")
    .populate({
      path: "comments",
      populate: {
        path: "user",
        select: { _id: 1, username: 1 }
      },
      options: {
        sort: "-createdAt"
      }
    })
    .lean();

  if (!token || !decodedToken.id) {
    post.user.username = "Anonymous";
    post.comments.forEach(comment => {
      comment.user.username = "Anonymous";
    });
  } else {
    const userVote = post.votes.find(vote => vote.user === decodedToken.id);
    if (userVote) {
      post.userVoteValue = userVote.vote;
    } else {
      post.userVoteValue = 0;
    }
  }

  return post;
};

const createPost = async (title, body, category, token) => {
  let decodedToken;

  if (token) {
    decodedToken = await jwt.verify(token, process.env.JWT_SECRET);
  }

  if (!token || !decodedToken.id) {
    throw new Error("User not authorized to create a post");
  }

  const user = await userModel.findById(decodedToken.id);

  postModel
    .create({
      title,
      body,
      category,
      user
    })
    .then(post => post)
    .catch(err => {
      throw new Error(err);
    });
};

const vote = async (value, postId, token) => {
  const post = await postModel.findById(postId);
  const decodedToken = await jwt.verify(token, process.env.JWT_SECRET);
  const existingVote = post.votes.find(vote => vote.user === decodedToken.id);

  if (existingVote) {
    post.voteCount -= existingVote.vote;
    if (value === 0) {
      post.votes.pull(existingVote);
    } else {
      post.voteCount += value;
      existingVote.vote = value;
    }
  } else {
    post.voteCount += value;
    post.votes.push({ user: decodedToken.id, vote: value });
  }

  return post.save();
};

module.exports = { getAllPosts, getOnePost, createPost, vote };
