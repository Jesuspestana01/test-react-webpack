import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./views/Home";
import { Single } from "./views/Single";

const Layout = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/single" element={<Single />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Layout;
