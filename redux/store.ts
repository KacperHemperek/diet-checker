import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { createLogger } from "redux-logger";

const logger = createLogger();

export const store = configureStore({
    reducer: rootReducer,
    middleware: [logger],
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
