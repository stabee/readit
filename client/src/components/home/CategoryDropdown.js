import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import styled from "styled-components/macro";
import { CATEGORIES } from "../../helpers";

const FormContainer = styled.div`
  display: none;

  @media only screen and (max-width: 960px) {
    display: block !important;
  }
`;

const CategoryDropdown = () => {
  const history = useHistory();

  const handleCategoryChange = e => {
    history.push(e.target.value);
  };

  return (
    <FormContainer>
      <Form onChange={handleCategoryChange}>
        <Form.Group>
          <Form.Control as="select">
            <option value="/">all</option>
            {Object.values(CATEGORIES).map(category => {
              return (
                <option value={`/r/${category}`} key={category}>
                  {category}
                </option>
              );
            })}
          </Form.Control>
        </Form.Group>
      </Form>
    </FormContainer>
  );
};

export default CategoryDropdown;
