const express = require("express");

const { posts, comments, auth } = require("../controllers");

const router = express.Router();

// Posts routes
router.get("/posts", posts.getAllPosts);
router.get("/posts/:id", posts.getOnePost);
router.post("/vote", posts.vote);
router.post("/posts", posts.createPost);

// Comments routes
router.post("/comments", comments.createComment);

// Auth routes
router.post("/login", auth.login);
router.post("/signup", auth.signup);

module.exports = router;
