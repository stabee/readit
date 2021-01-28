import axios from "axios";

export function getPosts(category, username) {
  return axios
    .get("/api/posts", { params: { category, username } })
    .then(res => res.data);
}

export function getUserPosts(username) {
  return axios.get(`/api/u/${username}`).then(res => res);
}

export function getPost(id) {
  return axios.get(`/api/posts/${id}`).then(res => res.data);
}

export function createPost(title, body, category) {
  return axios.post("/api/posts", { title, body, category });
}

export function vote(value, postId) {
  return axios.post("/api/vote", { value, postId });
}
