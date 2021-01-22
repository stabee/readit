import axios from "axios";

export function getPosts() {
  return axios.get("http://localhost:3001/api/posts").then(res => res.data);
}

export function getPost(id) {
  return axios
    .get(`http://localhost:3001/api/posts/${id}`)
    .then(res => res.data);
}

export function createPost(title, body) {
  return axios.post("http://localhost:3001/api/posts", { title, body });
}
