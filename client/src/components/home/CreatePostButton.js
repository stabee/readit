import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import styled from "styled-components/macro";

const StyledButton = styled(Button)`
  width: 100%;
  margin-bottom: 10px;
`;

const CreatePostButton = () => {
  return (
    <Link to="/posts/create">
      <StyledButton>Create Post</StyledButton>
    </Link>
  );
};

export default CreatePostButton;
