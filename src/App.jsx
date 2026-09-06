import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";

import { BrowserRouter, useRoutes } from "react-router-dom";
``;
import { roterConfigu } from "./router/ApiRoute";

function App() {
  function AppRouter() {
    const route = useRoutes(roterConfigu);
    return route;
  }

  return (
    <>
      <BrowserRouter basename="/HoneyDarby/">
        <AppRouter />
      </BrowserRouter>
    </>
  );
}

export default App;
