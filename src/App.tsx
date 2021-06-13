import React from "react";
import { hot } from "react-hot-loader/root";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { MainView } from "./views/MainView";

const App: React.FC = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Route exact path="/" component={MainView} />
    </Router>
  );
};

export default hot(App);
