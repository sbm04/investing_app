import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Details from "./details";
import Home from "./home";

const Navigation = () => {
  return (
    <Router>
      <Switch>
        <Route path="/details" exact component={Details} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
};

export default Navigation;
