// This component will not be re-render everytime you change to a different view, because is outside of the Routes of the layout. It'll be render on the whole app

import React from "react";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light shadow-lg fixed-top">
      <div className="container">
        
          <div className="col-12 text-center fs-2" style={{color:"black"}}>
            Navbar
          
        </div>
      </div>
    </nav>
  );
};
