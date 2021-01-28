import { useState } from "react";
import { useHistory } from "react-router-dom";
import { createPost } from "../services/posts";
import { CATEGORIES } from "../helpers";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styled from "styled-components/macro";

const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  background-color: #fff;
  padding: 30px;
  border: 1px solid rgb(235, 237, 240);
`;

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [category, setCategory] = useState(Object.values(CATEGORIES)[0]);

  const history = useHistory();

  const updateCategory = e => setCategory(e.target.value);

  const updateTitle = e => setTitle(e.target.value);

  const updateBody = e => setBody(e.target.value);

  const submitPost = e => {
    e.preventDefault();
    createPost(title, body, category).then(() => history.push("/"));
  };

  return (
    <FormContainer>
      <Form>
        <Form.Group controlId="formCategory">
          <Form.Label>Category</Form.Label>
          <Form.Control as="select" onChange={updateCategory}>
            {Object.values(CATEGORIES).map(category => {
              return <option value={category}>{category}</option>;
            })}
          </Form.Control>
        </Form.Group>
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
    </FormContainer>
  );
};

export default CreatePost;
