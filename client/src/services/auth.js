import axios from "axios";

export const signUp = (username, password) => {
  return axios.post("/api/signup", { username, password }).then(res => res);
};

export const login = (username, password) => {
  return axios
    .post("/api/login", {
      username,
      password
    })
    .then(res => {
      const token = res.data.token;
      const username = res.data.username;
      window.localStorage.setItem("userToken", token);
      window.localStorage.setItem("username", username);
      window.location.href = "/";
    });
};
