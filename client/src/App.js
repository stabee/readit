import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Post from "./components/Post";
import CreatePost from "./pages/CreatePost";
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/posts/create" component={CreatePost} />
        <Route path="/posts/:id" component={Post} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
};

export default App;
