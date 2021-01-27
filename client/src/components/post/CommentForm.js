import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styled from "styled-components/macro";
import { createComment } from "../../services/comments";
import { userLoggedIn } from "../../helpers";

const SubmitButtonWrapper = styled.div`
  margin 10px 5px 10px;
  text-align: right;
`;

const NotLoggedInWrapper = styled.div`
  padding: 10px;
`;

const NotLoggedInBox = styled.div`
  padding: 10px;
  border: 1px solid rgb(235, 237, 240);
`;

const CommentForm = ({ post }) => {
  const [body, setBody] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    createComment(post._id, body).then(res => {
      console.log(res);
      window.location.reload();
    });
  };

  const handleChange = e => {
    setBody(e.target.value);
  };

  if (userLoggedIn()) {
    return (
      <Form onSubmit={handleSubmit}>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter your comment"
          onChange={handleChange}
        />
        <SubmitButtonWrapper>
          <Button type="submit">Submit</Button>
        </SubmitButtonWrapper>
      </Form>
    );
  } else {
    return (
      <NotLoggedInWrapper>
        <NotLoggedInBox>Log in or sign up to leave a comment</NotLoggedInBox>
      </NotLoggedInWrapper>
    );
  }
};

export default CommentForm;
