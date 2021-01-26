import Posts from "../components/home/Posts";
import RightMenu from "../components/home/RightMenu";
import styled from "styled-components/macro";

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const LeftContainer = styled.div`
  flex: 1 1 0%;
`;

const RightContainer = styled.div``;

const HomePage = () => {
  return (
    <FlexContainer>
      <LeftContainer>
        <Posts />
      </LeftContainer>
      <RightContainer>
        <RightMenu />
      </RightContainer>
    </FlexContainer>
  );
};

export default HomePage;
