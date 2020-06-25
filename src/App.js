import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import App from "./components/App";

function AppRouter() {
  return (
    <Router>
      <Switch>
      <Route path="/:page" children={<App />}></Route>
      <Route path="/" children={<App />}></Route>
      </Switch>
    </Router>
  );
}

export default AppRouter;
