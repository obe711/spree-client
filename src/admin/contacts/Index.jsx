import React from "react";
import { Route, Switch } from "react-router-dom";
import { ListContacts } from "./ListContacts";

function Contacts({ match }) {
  const { path } = match;

  return (
    <Switch>
      <Route exact path={path} component={ListContacts} />
    </Switch>
  );
}

export { Contacts };
