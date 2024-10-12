import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Hello from "./Hello";
import NotFound from "./NotFound";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Hello} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

render(<App />, document.getElementById("root"));
