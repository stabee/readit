const express = require("express");

const { posts, comments, auth } = require("../controllers");

const router = express.Router();

// Posts routes
router.get("/posts", posts.getAllPosts);
router.post("/posts", posts.createPost);
router.get("/posts/:id", posts.getOnePost);
router.post("/vote", posts.vote);

// Comments routes
router.post("/comments", comments.createComment);

// Auth routes
router.post("/login", auth.validators(), auth.login);
router.post("/signup", auth.validators("register"), auth.signup);

module.exports = router;
