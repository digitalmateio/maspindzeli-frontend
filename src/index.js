import React from "react";
import { createStore, applyMiddleware } from "redux";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import jwtDecode from "jwt-decode";
import App from "./components/App";
import rootReducer from "./reducers";
import { setTripStart } from "./actions/trip-start-action";

const middleware = [reduxThunk];
const composeEnhancers = composeWithDevTools({});
const store = createStore(
  rootReducer,
  {},
  composeEnhancers(applyMiddleware(...middleware))
);

if (localStorage.tripStart) {
  store.dispatch(setTripStart());
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
