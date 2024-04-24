import React from "react";
import TarjetCandidates from "../../shared/tarjetCandidates/TarjetCandidates";
import styles from "./Person.module.css";
import HeaderLogo from "../../Header/HeaderLogo";
const Personero = () => {
  return (
    <>
      <div className={styles.pages}>
        <div className="logo">
          <HeaderLogo />
        </div>
        <div className={styles.title}>
          <h1>REPRESENTANTES A LA PERSONERIA </h1>
        </div>

        <div className={styles.containerTarjet}>
          <TarjetCandidates />
          <TarjetCandidates />
          <TarjetCandidates />
        </div>
      </div>
    </>
  );
};

export default Personero;
