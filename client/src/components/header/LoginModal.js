import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

const LoginModal = ({ showLoginModal, closeLoginModal }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const updateUsername = e => {
    setUsername(e.target.value);
  };

  const updatePassword = e => {
    setPassword(e.target.value);
  };

  const submitLoginInfo = e => {
    e.preventDefault();
    axios
      .post("http://www.localhost:3001/api/login", { username, password })
      .then(res => {
        const token = res.data.token;
        window.localStorage.setItem("userToken", token);
        window.location.href = "/";
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <Modal show={showLoginModal} onHide={closeLoginModal}>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={updateUsername}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={updatePassword}
          ></Form.Control>
        </Form.Group>
        <Button type="Submit" onClick={submitLoginInfo}>
          Submit
        </Button>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
