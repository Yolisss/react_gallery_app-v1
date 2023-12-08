import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search.jsx";
import Nav from "./components/Nav.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Browser Router renders the route router that listens to the URL changes 
    and provides other React Router component's information about the current URL, and
    which component to render. That way your UI is always in sync with the URL  */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
