import CreatePostButton from "./CreatePostButton";
import CategoryMenu from "./CategoryMenu";
import { userLoggedIn } from "../../helpers";
import styled from "styled-components/macro";

const MenuContainer = styled.div`
  width: 15vw;
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
