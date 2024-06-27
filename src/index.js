import { Suspense } from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
// import Loading from "./layouts/loading";
import "./index.css";
import ThemeProvider from "./theme";

import App from "./App";
import store from "./store/redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <HelmetProvider>
    <ThemeProvider>
      <Provider store={store}>
        <Suspense>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Suspense>
      </Provider>
    </ThemeProvider>
  </HelmetProvider>
);
