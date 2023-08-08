import React from "react";
import Button from "react-bootstrap/Button";

const ItemsNoticias = ({ novedades, handleShow }) => {
  return (
    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
      {novedades.map((item) => (
        <div key={item.id} className="feature col text-white">
          <h3 className="fs-2">{item.title}</h3>
          <p>{item.description}</p>
          <Button onClick={()=>handleShow(item.title)} variant="primary">
            Call to action
          </Button>
        </div>
      ))}
    </div>
  );
};

export default ItemsNoticias;
