import Posts from "../components/home/Posts";
import CategoryDropdown from "../components/home/CategoryDropdown";
import RightMenu from "../components/home/RightMenu";
import styled from "styled-components/macro";

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const LeftContainer = styled.div`
  flex: 1 1 0%;
`;

const HomePage = () => {
  return (
    <FlexContainer>
      <LeftContainer>
        <CategoryDropdown />
        <Posts />
      </LeftContainer>
      <RightMenu />
    </FlexContainer>
  );
};

export default HomePage;
