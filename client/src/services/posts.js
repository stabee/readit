import axios from "axios";

export function getPosts() {
  return axios.get("http://localhost:3001/api/posts").then(res => res.data);
}
