import React from "react";
import style from "../OptionalRepresentante/OptionalRepresentante.module.css"

import HeaderLogo from "../../../../Header/HeaderLogo";
import LinksAcctions from "../../../../shared/linksAcctions/LinksAcctions";
const OptionalRepresentante = () => {
  return (
    <>
      <div className={style.bod}>
        <HeaderLogo />

        <div className={style.container}>
          <div className={style.listOptions}>
            <div className={style.titlle}>
              <span>Opciones de representante</span>
            </div>
            <div className={style.options}>
              <div className={style.optionItem}>
                <LinksAcctions title={"Cargar un representante"} to="/BuscarEstudiantesRepresentates" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  class="bi bi-arrow-up-circle"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z"
                  />
                </svg>
              </div>
             
              <div className={style.optionItem}>
                <LinksAcctions title={"Listar representantes"} to={"/representatesRegistrados"} />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  class="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OptionalRepresentante ;
