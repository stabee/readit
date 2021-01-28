import { NavLink } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";

const CategoryMenu = () => {
  return (
    <div>
      <ListGroup>
        <ListGroup.Item>
          <strong>Categories</strong>
        </ListGroup.Item>
        <NavLink exact to="/" activeClassName="active">
          <ListGroup.Item>all</ListGroup.Item>
        </NavLink>
        <NavLink to="/r/programming" activeClassName="active">
          <ListGroup.Item>programming</ListGroup.Item>
        </NavLink>
        <NavLink to="/r/music" activeClassName="active">
          <ListGroup.Item>music</ListGroup.Item>
        </NavLink>
        <NavLink to="/r/news" activeClassName="active">
          <ListGroup.Item>news</ListGroup.Item>
        </NavLink>
        <NavLink to="/r/books" activeClassName="active">
          <ListGroup.Item>books</ListGroup.Item>
        </NavLink>
        <NavLink to="/r/tv" activeClassName="active">
          <ListGroup.Item>tv</ListGroup.Item>
        </NavLink>
        <NavLink to="/r/funny" activeClassName="active">
          <ListGroup.Item>funny</ListGroup.Item>
        </NavLink>
      </ListGroup>
    </div>
  );
};

export default CategoryMenu;
