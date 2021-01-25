import { useState } from "react";
import { createComment } from "../../services/comments";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const CommentForm = ({ postId }) => {
  const [body, setBody] = useState("");

  const handleChange = e => {
    setBody(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    createComment(postId, body).then(res => console.log(res));
    console.log("Submitting");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Control
        as="textarea"
        rows={3}
        placeholder="Enter your comment"
        onChange={handleChange}
      />
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default CommentForm;
