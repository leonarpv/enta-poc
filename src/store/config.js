import { applyMiddleware, createStore } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { composeWithDevTools } from "redux-devtools-extension";

import monitorReducersEnhancer from "./enhancers/monitorReducer";
import loggerMiddleware from "./middleware/logger";
import { rootReducer } from "./reducers/rootReducer";
import { rootEpic } from "./epics/combineEpics";

const epicMiddleware = createEpicMiddleware();

export default function configureStore(preloadedState) {
  const middlewares = [loggerMiddleware, epicMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer, monitorReducersEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  epicMiddleware.run(rootEpic);

  return store;
}
