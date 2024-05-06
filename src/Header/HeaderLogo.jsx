import React from 'react';
import style from "./Header.module.css"
const HeaderLogo= () => {
  return (
    <>
      <div className={style.logo} >
        <img
          src="src/Header/universidad-de-cartagena-colombia-colores-planos-logo-29D4150EAF-seeklogo.com (1).png"
          alt="aun no hayfoto"
        />
      </div>
    </>
  );
};

export default HeaderLogo;
