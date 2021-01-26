import { NavLink } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";

const CategoryMenu = () => {
  return (
    <div>
      <ListGroup>
        <ListGroup.Item>
          <strong>Categories</strong>
        </ListGroup.Item>
        <NavLink to="/" activeClassName="active">
          <ListGroup.Item>all</ListGroup.Item>
        </NavLink>
        <NavLink to="/r/programming" activeClassName="active">
          <ListGroup.Item>programming</ListGroup.Item>
        </NavLink>
        <NavLink to="/r/music" activeClassName="active">
          <ListGroup.Item>music</ListGroup.Item>
        </NavLink>
      </ListGroup>
    </div>
  );
};

export default CategoryMenu;
