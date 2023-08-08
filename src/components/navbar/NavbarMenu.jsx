import React from "react";
import MenuItems from "./MenuItems";
import Buscador from "./Buscador";
import dataMenu from "../../data/Menu.json"

const NavbarMenu = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <MenuItems dataMenu={dataMenu}></MenuItems>
          <Buscador></Buscador>
        </div>
      </div>
    </nav>
  );
};

export default NavbarMenu;
