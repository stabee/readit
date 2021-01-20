const express = require("express");

const { posts, users, comments, auth } = require("../controllers");

const router = express.Router();

// Posts routes
router.get("/posts", posts.getAllPosts);
router.post("/posts", posts.createPost);
router.get("/posts/:id", posts.getOnePost);

// Comments routes
router.post("/comments", comments.createComment);

// Auth routes
router.post("/login", auth.login);
router.post("/signup", auth.signup);

module.exports = router;
