import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const CreatePostButton = () => {
  return (
    <Link to="/posts/create">
      <Button>Create Post</Button>
    </Link>
  );
};

export default CreatePostButton;
