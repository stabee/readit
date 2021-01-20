const { commentService } = require("../services");
const { getTokenFrom } = require("../helpers/auth");

const createComment = async (req, res, next) => {
  try {
    const token = getTokenFrom(req);
    const comment = await commentService.createComment(token, req.body.postId, {
      body: req.body.body,
      username: token.usrename
    });
    if (comment.error) {
      throw new Error(comment.error.message);
    }
    res.json(comment);
  } catch (e) {
    res.json({
      error: e.message
    });
  }
};

module.exports = {
  createComment
};
