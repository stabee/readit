import { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import SignupModal from "./SignupModal";
import LoginModal from "./LoginModal";
import Row from "react-bootstrap/Row";
import { getUsername } from "../../helpers";
import styled from "styled-components/macro";

const UsernameContainer = styled.div`
  display: flex;
  align-items: center;
  border-right: 1px solid rgb(129, 142, 153);
  padding: 0 1rem;
  color: rgb(129, 142, 153);
`;

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
    window.localStorage.removeItem("username");
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
      <Row className="ml-auto">
        <UsernameContainer>
          <Link to={`/u/${getUsername()}`}>{getUsername()}</Link>
        </UsernameContainer>
        <Nav.Link onClick={logOut} className="ml-auto">
          Log Out
        </Nav.Link>
      </Row>
    );
  }
};

export default HeaderSignIn;
