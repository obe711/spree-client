import React from "react";
import { Route, Switch } from "react-router-dom";
import { ListEnrollments } from "./ListEnrollments";

function Enrollments({ match }) {
  const { path } = match;

  return (
    <Switch>
      <Route exact path={path} component={ListEnrollments} />
    </Switch>
  );
}

export { Enrollments };
