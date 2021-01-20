import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Navbar from "./components/TopNav";
import Posts from "./components/Posts";
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
      </Switch>
      <Posts />
    </div>
  );
};

export default App;
