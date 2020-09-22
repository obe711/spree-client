import React from "react";
import { Route, Switch } from "react-router-dom";

import { Overview } from "./Overview";
import { Users } from "./users";
import { Contacts } from "./contacts";
import { Enrollments } from "./enrollments";

import NavBarAdmin from "../_components/page/NavBarAdmin";
import "react-table-v6/react-table.css";

function Admin({ match }) {
  const { path } = match;

  return (
    <React.Fragment>
      <NavBarAdmin solidNav match={match} />

      <Switch>
        <Route exact path={path} component={Overview} />
        <Route path={`${path}/users`} component={Users} />
        <Route path={`${path}/contacts`} component={Contacts} />
        <Route path={`${path}/enrollments`} component={Enrollments} />
      </Switch>
    </React.Fragment>
  );
}

export { Admin };
