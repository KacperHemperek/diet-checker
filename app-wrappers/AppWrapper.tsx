import React from "react";
import { Provider } from "react-redux";
import { persistor, store } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import RouterGuard from "./RouterGuard";
import AuthWrapper from "./AuthWrapper";

type Props = {
  children: any;
};

const AppWrapper = ({ children }: Props) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthWrapper>
          <RouterGuard>{children}</RouterGuard>
        </AuthWrapper>
      </PersistGate>
    </Provider>
  );
};

export default AppWrapper;
