import React from "react";
import ItemsNoticias from "./ItemsNoticias";
import dataNovedades from "../../data/Novedades.json";
import ModalNovedades from "./ModalNovedades";
import { useState } from "react";

const Novedades = () => {
  const [novedades , setNovedades] = useState(dataNovedades);
  const [title, setTitle] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const handleShow = (title) => {
    setShow(true)
    setTitle(title);

  }



  return (
    <>
      <div className="container px-4 py-5" id="featured-3">
        <h2 className="pb-2 border-bottom text-white">NOVEDADES</h2>
        <ItemsNoticias
          novedades={novedades}
          handleShow={handleShow}
        ></ItemsNoticias>
        <ModalNovedades 
        handleClose={handleClose} 
        show={show}
        title={title}
        ></ModalNovedades>
      </div>
    </>
  );
};

export default Novedades;
