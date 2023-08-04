import React, { useEffect, useState } from "react";
import CallToAction from "../../data/CallToAction.json";

const BannerCallToAction = () => {
  const [banner, setBanner] = useState({});

  const bannerFuncion = () => {
    const indexAleatorio = Math.floor(Math.random() * CallToAction.length);
    const objetoBanner = CallToAction[indexAleatorio];
    setBanner(objetoBanner);
  };

  useEffect(() => {
    bannerFuncion();
    const intervalo = setInterval(() => {
      bannerFuncion();
    }, 4000);

    // return () => clearInterval(intervalo); !!!! CONSULTAR!!!!!

  }, [CallToAction.length]);

  return (
    <>
      <div style={{ fontSize: "80px", fontWeight: "bold" }}>{banner.title}</div>
      <div style={{ fontSize: "30px" }}>{banner.subtitle}</div>
      <div style={{ marginTop: "20px" }}>
        <button className="btn btn-primary">Comprar Ahora!</button>
      </div>
    </>
  );
};

export default BannerCallToAction;
