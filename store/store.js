import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "../redux/reducers";

const middleware = [thunk];

const makeStore = () =>
  createStore(
    rootReducer,
    compose(applyMiddleware(...middleware)) // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

export const wrapper = createWrapper(makeStore);
