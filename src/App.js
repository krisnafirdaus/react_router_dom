import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

// Pages
import Home from "pages/Home";
import Bmi from "pages/Bmi";
import Register from "pages/Register";
import Todos from "pages/Todos";
import UpperCase from "pages/UpperCase";

// Components
import Header from "component/Header";

// style
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/bmi">
            <Bmi />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/todos">
            <Todos />
          </Route>
          <Route path="/uppercase">
            <UpperCase />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
