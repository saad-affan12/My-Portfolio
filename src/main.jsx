import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

/**
 * Global smooth scroll (native, performant)
 * Premium feel, no overengineering
 */
document.documentElement.style.scrollBehavior = "smooth";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
