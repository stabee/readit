import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { createComment } from "../../services/comments";

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
