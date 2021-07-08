import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "components/utils/Auth";

import ChartPage from "components/pages/chart/ChartPage";
import HomePage from "components/pages/home/HomePage";
import Login from "components/pages/login/Login";
import Signup from "components/pages/login/Signup";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <AuthProvider>
          <Route path="/chart" component={ChartPage} exact />
          <Route path="/" component={HomePage} exact />
          <Route path="/signup" component={Signup} exact />
          <Route path="/login" component={Login} exact />
        </AuthProvider>
      </Switch>
    </Router>
  );
};

export default App;
