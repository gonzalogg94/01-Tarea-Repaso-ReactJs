import React from "react";
import ItemsNoticias from "./ItemsNoticias";
import dataNovedades from "../../data/Novedades.json"



const Novedades = () => {
  return (
    <div className="container px-4 py-5" id="featured-3">
      <h2 className="pb-2 border-bottom text-white">NOVEDADES</h2>
      <ItemsNoticias dataNovedades={dataNovedades}></ItemsNoticias>
    </div>
  );
};

export default Novedades;
