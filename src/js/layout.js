// Layout of the App using React Router. This file is passed to index.js in order to be render by webpack, allowing you pass different views to make a dynamic views of the App.

import React from "react";
import { Navbar } from "../js/components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./views/Home";


const Layout = () => {
  return (
    <div className="mt-5">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          
        </Routes>
      
      </BrowserRouter>
    </div>
  );
};

export default Layout;
