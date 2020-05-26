// modules
import { createStore, compose } from "redux";

// root reducer
import rootReducer from "reducers";

// default data
import forms from "data/forms";

const defaultState = {
  forms,
};

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : (f) => f
);

const store = createStore(rootReducer, defaultState, enhancers);

// if (module.hot) {
//   module.hot.accept("reducers", () => {
//     const nextRootReducer = require("./reducers/index").default;
//     store.replaceReducer(nextRootReducer);
//   });
// }

export default store;
