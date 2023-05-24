import { createStore, applyMiddleware } from "redux";
// logger redux
import logger from "redux-logger";
import rootReducer from "../redux/reducer/index";
import promiseMiddleware from "redux-promise-middleware";
//persist storage
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persisConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persisConfig, rootReducer);

const middleware = applyMiddleware(logger, promiseMiddleware);

const store = createStore(persistedReducer, middleware);

const persistor = persistStore(store);

export { store, persistor };
