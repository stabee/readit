const { postService } = require("../services");
const { getTokenFrom } = require("../helpers/auth");

const getAllPosts = async (req, res, next) => {
  try {
    const token = getTokenFrom(req);
    const posts = await postService.getAllPosts(token);
    res.json(posts);
  } catch (e) {
    console.log(e.message);
    res.sendStatus(500) && next(e);
  }
};

const getOnePost = async (req, res, next) => {
  try {
    const token = getTokenFrom(req);
    const post = await postService.getOnePost(token, req.params.id);
    res.json(post);
  } catch (e) {
    console.log(e.message);
    res.sendStatus(500) && next(e);
  }
};

const createPost = async (req, res, next) => {
  try {
    const post = await postService.createPost(
      req.body.title,
      req.body.author,
      req.body.body
    );
    res.json(post);
  } catch (e) {
    console.log(e.message);
    res.sendStatus(500) && next(e);
  }
};

module.exports = {
  getAllPosts,
  createPost,
  getOnePost
};
