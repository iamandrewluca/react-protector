import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { BrowserRouter } from "react-router-dom";
import ConnectedProtection from "./ConnectedProtection";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const store = createStore((state = "") => state);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ConnectedProtection>
        <App />
      </ConnectedProtection>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
