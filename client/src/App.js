import Header from "./components/header/Header";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import CreatePost from "./pages/CreatePost";
import { Switch, Route, Redirect } from "react-router-dom";
import styled from "styled-components/macro";

const Background = styled.div`
  padding-top: 24px;
  background-color: rgb(250, 250, 250);
  min-height: calc(100vh - 48px);
`;

const Container = styled.div`
  margin: 0 10vw;

  @media only screen and (max-width: 960px) {
    margin: 0;
  }
`;

const App = () => {
  return (
    <>
      <Header />
      <Background>
        <Container>
          <Switch>
            <Route path="/posts/create" component={CreatePost} />
            <Route path="/posts/:id" component={PostPage} />
            <Route path="/r/:category" component={HomePage} />
            <Route path="/u/:username" component={HomePage} />
            <Route exact path="/" component={HomePage} />
            <Route render={() => <Redirect to="/" />}></Route>
          </Switch>
        </Container>
      </Background>
    </>
  );
};

export default App;
