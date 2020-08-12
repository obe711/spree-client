import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";

import { Role } from "@/_helpers";
import { accountService } from "@/_services";
import { Nav, PrivateRoute, Alert } from "@/_components";
//import { Home } from "@/home";
import { Profile } from "@/profile";
import { Admin } from "@/admin";
import { Account } from "@/account";
import About from "../views/about/About";
import Home from "../views/home/Home";

import Contact from "../views/contact/Contact";
import Enroll from "../views/enroll/Enroll";
import Store from "../views/store/Store";
import LoginPage from "../account/views/LoginPage";

function App() {
  const { pathname } = useLocation();
  const [user, setUser] = useState({});

  useEffect(() => {
    const subscription = accountService.user.subscribe((x) => setUser(x));
    return subscription.unsubscribe;
  }, []);

  return (
    <React.Fragment>
    <Alert />
      <Switch>
        <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />
        <Route exact path="/" component={Home} />
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/admin" roles={[Role.Admin]} component={Admin} />
        <Route path="/login" component={LoginPage} />
        <Route path="/account" component={Account} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/enroll" component={Enroll} />
        <Route path="/store" component={Store} />
        <Redirect from="*" to="/" />
    </Switch>
    </React.Fragment>
  );
}

export { App };
