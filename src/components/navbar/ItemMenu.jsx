import React from 'react';

const ItemMenu = ({item}) => {

  const isDisable= !item.active ? "disabled" : "";
    return (
        <a className={`nav-link active text-white ${isDisable}`} aria-current="page" href="#">
        {item.name}
      </a>
    );
};

export default ItemMenu;