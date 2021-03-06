const express = require("express");

const { posts, comments, auth } = require("../controllers");

const router = express.Router();

// Posts routes
router.get("/posts", posts.getAllPosts);
router.post("/posts", posts.createPost);
router.get("/posts/:id", posts.getOnePost);
router.delete("/posts/:id", posts.deletePost);
router.post("/vote", posts.vote);

// Comments routes
router.post("/comments", comments.createComment);
router.delete("/comments/:id", comments.deleteComment);

// Auth routes
router.post("/login", auth.validators(), auth.login);
router.post("/signup", auth.validators("register"), auth.signup);

module.exports = router;
