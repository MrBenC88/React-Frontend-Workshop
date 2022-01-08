import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { ResultsPage } from "./pages/ResultsPage";

/**
 * We use the react-router-dom library to simplify routing in our application.
 * We use BrowserRouter, Switch, and Route.
 *
 * BrowserRouter is the router implementation for HTML5 browsers (https://v5.reactrouter.com/web/api/BrowserRouter)
 * The Switch returns only the first machin route rather than all matching routes.
 * The Link is the replacement for anchor tags.
 *
 * We give reach route a target component.
 * So, in our example "/" will route to the "Home" component
 */

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />

        {/* TODO #2: Import the Results Page, look at the Home import statement on line 4 for reference!
                     Add two routes following the format above!

        - /home should route to the Home component
        - /results should route to the ResultsPage component */}

        <Route exact path="/home" component={Home} />

        <Route path="/results" component={ResultsPage} />
      </Switch>
    </BrowserRouter>
  );
};
