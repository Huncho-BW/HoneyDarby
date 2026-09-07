import React, { Children } from "react";
import Service from "../Component/Service";

import Menu from "../Component/Menu";
import OurWork from "../Component/OurWork";
import Contact from "../Component/Contact";

import Layout from "../Component/Layout";
import About from "../Component/About";
import MakeInquriy from "../Component/MakeInQuriy";
import Home from "../Component/Home";
export const roterConfigu = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "service", element: <Service /> },
      { path: "menu", element: <Menu /> },
      { path: "OurWork", element: <OurWork /> },
      { path: "About", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "makeIq", element: <MakeInquriy /> },
    ],
  },
];
