import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Navbar from "./components/TopNav";
import Posts from "./components/Posts";
import Post from "./components/Post";
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/posts/:id" component={Post} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/" component={Posts} />
      </Switch>
    </div>
  );
};

export default App;
