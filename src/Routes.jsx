import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SeriesPage from "./Pages/SeriesPage";
import MoviesPage from "./Pages/MoviesPage";

const Routes = () => {
    return (
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/series">
            <SeriesPage />
          </Route>
          <Route exact path="/movies">
            <MoviesPage />
          </Route>
          <Redirect to="/" />
        </Switch>
      );
}

export default Routes;