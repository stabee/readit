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

module.exports = {
  createComment
};
