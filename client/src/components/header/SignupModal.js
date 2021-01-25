import Modal from "react-bootstrap/Modal";

const SignupModal = ({ showSignupModal, closeSignupModal }) => {
  return (
    <Modal show={showSignupModal} onHide={closeSignupModal}>
      <Modal.Header closeButton>
        <Modal.Title>Sign Up</Modal.Title>
      </Modal.Header>
      <Modal.Body>Sign Up Form</Modal.Body>
    </Modal>
  );
};

export default SignupModal;
