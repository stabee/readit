export const userLoggedIn = () => {
  return !!window.localStorage.getItem("userToken");
};
