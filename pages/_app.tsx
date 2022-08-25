import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { persistor, store } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import AppWrapper from "../app-wrappers/AppWrapper";
import RouterGuard from "../app-wrappers/RouterGuard";
import "react-loading-skeleton/dist/skeleton.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppWrapper>
          <RouterGuard>
            <Component {...pageProps} />
          </RouterGuard>
        </AppWrapper>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
