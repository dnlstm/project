// import "react-app-polyfill/ie11";
// import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom/client";
// import { createStore, applyMiddleware } from "redux";
// import { enableES5 } from "immer";
// import { composeWithDevTools } from "redux-devtools-extension";
// import ReduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./index.scss";
import App from "./App";
// import rootReducer from "./store/modules";
import reportWebVitals from "./reportWebVitals";
import ScrollToTop from "./lib/ScrollToTop";
import { configureStore } from "@reduxjs/toolkit/dist";
import register from "./modules/registerSlice";

// enableES5();

const store = configureStore({
  reducer: { register },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <HelmetProvider>
        <React.StrictMode>
          <ScrollToTop />
          <App />
        </React.StrictMode>
      </HelmetProvider>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
