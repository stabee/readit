import { useState } from "react";
import Nav from "react-bootstrap/Nav";
import SignupModal from "./SignupMoal";
import LoginModal from "./LoginModal";
import Row from "react-bootstrap/Row";

const HeaderSignIn = () => {
  const [showLoginModal, setLoginModal] = useState(false);
  const [showSignupModal, setSignupModal] = useState(false);

  const openLoginModal = e => {
    e.preventDefault();
    setLoginModal(true);
  };

  const closeLoginModal = () => {
    setLoginModal(false);
  };

  const openSignupModal = e => {
    e.preventDefault();
    setSignupModal(true);
  };

  const closeSignupModal = () => {
    setSignupModal(false);
  };

  const logOut = () => {
    window.localStorage.removeItem("userToken");
    window.location.href = "/";
  };

  if (!localStorage.getItem("userToken")) {
    return (
      <Row className="ml-auto">
        <Nav.Link onClick={openLoginModal}>Login</Nav.Link>
        <Nav.Link onClick={openSignupModal}>Sign Up</Nav.Link>
        <LoginModal
          showLoginModal={showLoginModal}
          closeLoginModal={closeLoginModal}
        />
        <SignupModal
          showSignupModal={showSignupModal}
          closeSignupModal={closeSignupModal}
        />
      </Row>
    );
  } else {
    return (
      <Nav.Link onClick={logOut} className="ml-auto">
        Log Out
      </Nav.Link>
    );
  }
};

export default HeaderSignIn;
