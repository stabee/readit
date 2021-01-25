import Header from "./components/header/Header";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import CreatePost from "./pages/CreatePost";
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/posts/create" component={CreatePost} />
        <Route path="/posts/:id" component={PostPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
};

export default App;
