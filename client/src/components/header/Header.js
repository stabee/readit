import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import HeaderSignIn from "./HeaderSignIn";
import styled from "styled-components/macro";

const Nav = styled(Navbar)`
   {
    position: fixed;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 10vw;
    height: 48px;
    margin-bottom: 24px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 4px 12px;
    border-bottom: 1px solid rgb(235, 237, 240);
    background-color: #fff;
    z-index: 10;
  }
`;

const NavSeperator = styled.div`
   {
    padding-bottom: 48px;
  }
`;

const Header = () => {
  return (
    <>
      <Nav>
        <Navbar.Brand as={Link} to="/">
          <strong>Readit</strong>
        </Navbar.Brand>
        <HeaderSignIn />
      </Nav>
      <NavSeperator />
    </>
  );
};

export default Header;
