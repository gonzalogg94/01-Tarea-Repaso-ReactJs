import React from "react";
import ItemMenu from "./ItemMenu";

const MenuItems = ({dataMenu}) => {
   
  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       {dataMenu.map((item)=>(
      <li key={item.id} className="nav-item ">
        <ItemMenu item={item}></ItemMenu>
      </li>   
       ))}
       
    </ul>
  );
};

export default MenuItems;
