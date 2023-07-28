import React from 'react';
import CardNovedades from './CardNovedades';

const ItemsNoticias = ({dataNovedades}) => {
    return (
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
{dataNovedades.map((item)=>(
        <div key={item.id} className="feature col text-white">
          <CardNovedades item={item}></CardNovedades>
        </div>    
  ))}
      </div>
    );
};

export default ItemsNoticias;