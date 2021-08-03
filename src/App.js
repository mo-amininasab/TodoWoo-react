import React from "react";
import { Route, Switch, Redirect } from "react-router";

// Components
import Navbar from "./components/UI/Navbar";
import Dropdown from "./components/UI/Dropdown";

// Pages
import Current from "./components/pages/Current";
import Create from "./components/pages/Create";
import Completed from "./components/pages/Completed";
import Login from "./components/pages/Login";
import NotFound from "./components/pages/NotFound";

function App() {
  return (
    <>
      <Navbar />
      <Dropdown />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/current" />
        </Route>
        <Route path="/current" component={Current} exact />
        <Route path="/completed" component={Completed} />
        <Route path="/Create" component={Create} />
        <Route path="/login" component={Login} />

        <Route path="*" component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
