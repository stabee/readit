import CreatePostButton from "./CreatePostButton";
import CategoryMenu from "./CategoryMenu";
import { userLoggedIn } from "../../helpers";
import styled from "styled-components/macro";

const MenuContainer = styled.div`
  width: 15vw;

  @media only screen and (max-width: 960px) {
    display: none;
  }
`;

const RightMenu = () => {
  return (
    <MenuContainer>
      {userLoggedIn() ? <CreatePostButton /> : ""}
      <CategoryMenu />
    </MenuContainer>
  );
};

export default RightMenu;
