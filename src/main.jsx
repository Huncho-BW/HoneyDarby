import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./home.css";
import "./service.css";
import "./menu.css";
import "./about.css";
import "./contact.css";
import "./ourWork.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
