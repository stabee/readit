import { useState } from "react";
import { signUp, login } from "../../services/auth";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import WarningPopup from "../shared/WarningPopup";

const SignupModal = ({ showSignupModal, closeSignupModal }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [warningMessage, setWarningMessage] = useState("");
  const [showWarning, setShowWarning] = useState(false);

  const updateUsername = e => {
    setUsername(e.target.value);
  };

  const updatePassword = e => {
    setPassword(e.target.value);
  };

  const updatePassword2 = e => {
    setPassword2(e.target.value);
  };

  const submitSignupInfo = e => {
    e.preventDefault();
    if (password !== password2) {
      handleWarningPopup("Passwords must be the same");
      return;
    }

    signUp(username, password)
      .then(() => {
        login(username, password);
      })
      .catch(err => {
        handleWarningPopup(err.response.data.errors[0].msg);
      });
  };

  const handleWarningPopup = warningMessage => {
    setShowWarning(true);
    setWarningMessage(warningMessage);
    setTimeout(() => setShowWarning(false), 4000);
  };

  return (
    <Modal show={showSignupModal} onHide={closeSignupModal}>
      {showWarning ? <WarningPopup message={warningMessage} /> : ""}
      <Modal.Header closeButton>
        <Modal.Title>Sign Up</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={submitSignupInfo}>
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control
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
          <Form.Group>
            <Form.Label>Re-enter Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={updatePassword2}
            ></Form.Control>
          </Form.Group>
          <Button type="Submit">Submit</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default SignupModal;
