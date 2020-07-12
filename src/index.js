import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";

import { createStore, applyMiddleware } from "redux";
import rootReducer from "./store/modules";

import { createLogger } from "redux-logger";
import reduxThunk from "redux-thunk"; //추가

const reduxLogger = createLogger();
// const devTools =
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(
  rootReducer,
  applyMiddleware(reduxLogger, reduxThunk)
); //수정
console.log(store.getState() + "스토어");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
