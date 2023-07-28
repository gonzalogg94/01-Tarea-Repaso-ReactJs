import React from 'react';

const ItemMenu = ({item}) => {
    return (
        <a className="nav-link active text-white" aria-current="page" href="#">
        {item.name}
      </a>
    );
};

export default ItemMenu;