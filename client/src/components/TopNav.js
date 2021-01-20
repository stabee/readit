import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

const TopNav = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">Private Forum</Navbar.Brand>
    </Navbar>
  );
};

export default TopNav;
