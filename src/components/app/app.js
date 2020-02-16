import React, { useEffect } from "react";
import "./app.scss";
import Spiner from "../spiner";
import { Switch, Route } from "react-router-dom";
import Login from "../pages/login";
import Success from "../success";
import { useDispatch, useSelector } from "react-redux";
const App = () => {
  const loaderTurn = useSelector(state => state.loader);
  const dispatch = useDispatch();
  useEffect(() => {
    demoAsyncCall().then(() => dispatch({ type: "DOM_LOADED" }));
  });
  if (loaderTurn) {
    return (
      <>
        <Spiner />
      </>
    );
  } else {
    return (
      <>
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/success" component={Success} />
        </Switch>
      </>
    );
  }
};
const demoAsyncCall = () => {
  return new Promise(resolve => setTimeout(() => resolve(), 1000));
};
export default App;
