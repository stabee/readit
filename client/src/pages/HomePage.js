import Posts from "../components/home/Posts";
import CreatePostButton from "../components/home/CreatePostButton";
import { userLoggedIn } from "../helpers";

const HomePage = () => {
  return (
    <>
      <Posts />
      {userLoggedIn() ? <CreatePostButton /> : ""}
    </>
  );
};

export default HomePage;
