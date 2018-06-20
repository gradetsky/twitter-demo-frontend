import React from "react";
import "normalize.css";
import "flexboxgrid2";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Switch, Redirect } from "react-router";
import ProfilePage from "./ProfilePage";

const App = props => (
  <div>
    <BrowserRouter>
      <div>
        <Redirect from="/" to="/everyinteract" />
        <Switch>
          <Route path="/everyinteract" component={ProfilePage} />
        </Switch>
      </div>
    </BrowserRouter>
  </div>
);

export default App;
