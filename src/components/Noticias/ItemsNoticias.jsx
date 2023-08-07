import React from "react";
import Button from "react-bootstrap/Button";

const ItemsNoticias = ({ dataNovedades, handleShow }) => {
  return (
    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
      {dataNovedades.map((item) => (
        <div key={item.id} className="feature col text-white">
          <h3 className="fs-2">{item.title}</h3>
          <p>{item.description}</p>
          <Button onClick={handleShow} variant="primary">
            Call to action
          </Button>
        </div>
      ))}
    </div>
  );
};

export default ItemsNoticias;
