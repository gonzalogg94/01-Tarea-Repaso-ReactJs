import React from 'react';

const CardNovedades = ({item}) => {
   
    return (
        <>
        <h3 className="fs-2">{item.title}</h3>
        <p>
         {item.description}
        </p>
        <a href="#" className="text-warning">
          Call to action
        </a>
        </>
    );
};

export default CardNovedades;