import { configureStore, PreloadedState } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { createLogger } from "redux-logger";
import { persistCombineReducers, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const logger = createLogger();

const persistConfig = {
  key: "root",
  storage,
};

export const persistedReducer = persistCombineReducers(
  persistConfig,
  rootReducer
);

console.log(persistedReducer);
export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: persistedReducer,
    middleware: [logger],
    preloadedState,
  });
};

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [logger],
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppStore = ReturnType<typeof setupStore>;

export type AppDispatch = typeof store.dispatch;
