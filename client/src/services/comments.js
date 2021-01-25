import axios from "axios";

export function createComment(postId, body) {
  return axios
    .post("/api/comments", {
      postId,
      body
    })
    .then(res => res.data);
}
