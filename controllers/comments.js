const { commentService } = require("../services");
const { getTokenFrom } = require("../helpers/auth");

const createComment = async (req, res) => {
  try {
    const token = getTokenFrom(req);
    const comment = await commentService.createComment(token, req.body.postId, {
      body: req.body.body
    });
    if (comment.error) {
      throw new Error(comment.error.message);
    }
    res.json(comment);
  } catch (error) {
    console.log(error);
  }
};

const deleteComment = async (req, res) => {
  try {
    const token = getTokenFrom(req);
    const deletedComment = commentService.deleteComment(token, req.params.id);
    res.json(deletedComment);
  } catch (e) {
    console.log(e);
    res.json(400).send({ error: e.message });
  }
};

module.exports = {
  createComment,
  deleteComment
};
