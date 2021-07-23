import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import BaseUse from "../pages/react-code-demo/baseUse";
import AdvancedUse from "../pages/react-code-demo/advancedUse";
import Principle from "../pages/react-code-demo/principle";

function Content() {
  return (
    <div className="content">
      <Switch>
        <Route path="/react-code-demo/baseUse">
          <BaseUse />
        </Route>
        <Route path="/react-code-demo/advancedUse">
          <AdvancedUse />
        </Route>
        <Route path="/react-code-demo/principle">
          <Principle />
        </Route>
        <Redirect to="/" from="/" />
      </Switch>
    </div>
  );
}

export default Content;
