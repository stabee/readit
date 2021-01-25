import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import HeaderSignIn from "./HeaderSignIn";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand as={Link} to="/">
        Private Forum
      </Navbar.Brand>
      <HeaderSignIn />
    </Navbar>
  );
};

export default Header;
