import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Posts from "./pages/Posts";
import Albums from "./pages/Albums";
import Todos from "./pages/Todos";

const Routes: React.FC = () => (
  <Router>
    <Route path="/" exact component={HomePage} />
    <Route path="/posts" component={Posts} />
    <Route path="/albums" component={Albums} isPrivate />
    <Route path="/todos" component={Todos} isPrivate />
  </Router>
);
export default Routes;
