import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "../components/about";
import Contact from "../components/contact";
import { Header } from "../components/header";
import Home from "../components/home";
import Product from "../components/product";

export const AppRouter = () => {
  return (
    <Router>
      <Header />
      <div>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route exact={false} path="/home">
            <Home />
          </Route>
          <Route exact={false} path="/product">
            <Product />
          </Route>
          <Route exact={false} path="/about">
            <About />
          </Route>
          <Route exact={false} path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
