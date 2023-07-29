import React from 'react';

const ItemsNoticias = ({dataNovedades}) => {
    return (
      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
      {dataNovedades.map((item)=>(
        <div key={item.id} className="feature col text-white">
         <h3 className="fs-2">{item.title}</h3>
        <p>
         {item.description}
        </p>
        <a href="#" className="text-warning">
          Call to action
        </a>
        </div>    
  ))}
  </div>
    );
};

export default ItemsNoticias;