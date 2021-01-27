import axios from "axios";

export function getPosts() {
  return axios.get("/api/posts").then(res => res.data);
}

export function getPost(id) {
  return axios.get(`/api/posts/${id}`).then(res => res.data);
}

export function createPost(title, body) {
  return axios.post("/api/posts", { title, body });
}

export function vote(value, postId) {
  return axios.post("/api/vote", { value, postId });
}
