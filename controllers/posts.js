const { postService } = require("../services");
const { getTokenFrom } = require("../helpers/auth");

const getAllPosts = async (req, res) => {
  try {
    const token = getTokenFrom(req);

    const posts = await postService.getAllPosts(
      token,
      req.query.category,
      req.query.username
    );
    res.json(posts);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ error: e.message });
  }
};

const getOnePost = async (req, res, next) => {
  try {
    const token = getTokenFrom(req);

    const post = await postService.getOnePost(token, req.params.id);
    res.json(post);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ error: e.message });
  }
};

const createPost = async (req, res, next) => {
  try {
    const token = getTokenFrom(req);

    const post = await postService.createPost(
      req.body.title,
      req.body.body,
      req.body.category,
      token
    );

    res.json(post);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ error: e.message });
  }
};

const deletePost = async (req, res) => {
  try {
    const token = getTokenFrom(req);

    const post = await postService.deletePost(token, req.params.id);

    res.json(post);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ error: e.message });
  }
};

const vote = async (req, res) => {
  try {
    const token = getTokenFrom(req);

    const post = await postService.vote(req.body.value, req.body.postId, token);

    res.json(post);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ error: e.message });
  }
};

module.exports = {
  getAllPosts,
  createPost,
  getOnePost,
  deletePost,
  vote
};
