export const userLoggedIn = () => {
  return !!window.localStorage.getItem("userToken");
};

export const getUsername = () => {
  return window.localStorage.getItem("username");
};

export const CATEGORIES = {
  PROGRAMMING: "programming",
  MUSIC: "music",
  NEWS: "news",
  BOOKS: "books",
  TV: "tv",
  FUNNY: "funny"
};
