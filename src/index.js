import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import { Auth0Provider } from "@auth0/auth0-react";
// import {AppProvider} from './context';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-sl8rym8wgasakdyg.us.auth0.com"
    clientId="M59kpqrhfgAnQuliTznffBDiGHaB0pNk"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    {/* <AppProvider> */}
    <App />

    {/* </AppProvider> */}
  </Auth0Provider>

  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
