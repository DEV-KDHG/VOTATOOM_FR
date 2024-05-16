import React from "react";

import TarjetCandidates from "../../shared/tarjetCandidates/TarjetCandidates"
import HeaderLogo from "../../Header/HeaderLogo";
const Personero = () => {
  return (
    <>
      <div >
        <div className="logo">
          <HeaderLogo />
        </div>
        <div >
          <h1>REPRESENTANTES A LA PERSONERIA </h1>
        </div>

        <div >
          <TarjetCandidates/>
          <TarjetCandidates />
          <TarjetCandidates />
        </div>
      </div>
    </>
  );
};

export default Personero;
