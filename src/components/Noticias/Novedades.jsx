import React from "react";
import ItemsNoticias from "./ItemsNoticias";
import dataNovedades from "../../data/Novedades.json";
import ModalNovedades from "./ModalNovedades";
import { useState } from "react";

const Novedades = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="container px-4 py-5" id="featured-3">
        <h2 className="pb-2 border-bottom text-white">NOVEDADES</h2>
        <ItemsNoticias
          dataNovedades={dataNovedades}
          handleShow={handleShow}
        ></ItemsNoticias>
        <ModalNovedades
          handleClose={handleClose}
          show={show}
        ></ModalNovedades>
      </div>
    </>
  );
};

export default Novedades;
