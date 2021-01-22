import { useState } from "react";
import { createPost } from "../services/posts";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const updateTitle = e => setTitle(e.target.value);

  const updateBody = e => setBody(e.target.value);

  const submitPost = e => {
    e.preventDefault();
    createPost(title, body).then(res => console.log(res));
  };

  return (
    <Form>
      <Form.Group controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control placeholder="Enter title" onChange={updateTitle} />
      </Form.Group>
      <Form.Group controlId="formBody">
        <Form.Label>Content</Form.Label>
        <Form.Control
          as="textarea"
          rows={4}
          placeholder="Text"
          onChange={updateBody}
        />
      </Form.Group>
      <Button onClick={submitPost}>Post</Button>
    </Form>
  );
};

export default CreatePost;
