import "core-js/stable";
import "regenerator-runtime/runtime";
import "react-app-polyfill/ie11";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/app";
import ErorB from "./components/erorb";
import { MyProvider } from "./components/context";
import MainServices from "./services";
import store from "./store";
const mainServices = new MainServices();
ReactDOM.render(
  <Provider store={store}>
    <ErorB>
      <MyProvider value={mainServices}>
        <Router>
          <App />
        </Router>
      </MyProvider>
    </ErorB>
  </Provider>,
  document.getElementById("root")
);
