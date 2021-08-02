import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";

// Pages
import Home from "./components/pages/Home";
import AboutMe from "./components/pages/AboutMe";

function App() {
  return (
    <>
      <Navbar />

      <Switch>
        {/* <Route path="/PasswordGenerator-react/" exact>
          <Redirect to="home" />
        </Route> */}

        <Route path="home" exact>
          <Home />
        </Route>

        <Route path="about-me">
          <AboutMe />
        </Route>

        {/* <Route path="/PasswordGenerator-react/*">
          <Redirect to="/PasswordGenerator-react/home" />
        </Route> */}
      </Switch>
    </>
  );
}

export default App;
