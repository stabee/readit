import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import WarningPopup from "../shared/WarningPopup";
import { login } from "../../services/auth";

const LoginModal = ({ showLoginModal, closeLoginModal }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [warningMessage, setWarningMessage] = useState("");
  const [showWarning, setShowWarning] = useState(false);

  const updateUsername = e => {
    setUsername(e.target.value);
  };

  const updatePassword = e => {
    setPassword(e.target.value);
  };

  const submitLoginInfo = e => {
    e.preventDefault();
    login(username, password).catch(err => {
      setWarningMessage(err.response.data.error);
      setShowWarning(true);
      setTimeout(() => setShowWarning(false), 3000);
    });
  };

  return (
    <Modal show={showLoginModal} onHide={closeLoginModal}>
      {showWarning ? <WarningPopup message={warningMessage} /> : ""}
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={submitLoginInfo}>
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
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
          <Button type="Submit">Submit</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
