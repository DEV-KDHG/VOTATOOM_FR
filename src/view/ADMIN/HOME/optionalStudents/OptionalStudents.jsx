import React from "react";
import style from '../optionalStudents/OptinalStudents.module.css'
import HeaderAdmin from '../../../../Headers/HeaderAdmin'
import LinksAcctions from "../../../../shared/linksAcctions/LinksAcctions";
import { Link } from "react-router-dom";



const OptionalStudents = () => {
  return (
    <>
      <div className={style.bod}>

      <HeaderAdmin tituloHeader="Panel Estudiantes"/>
        <div className={style.container}>
          <div className={style.listOptions}>
            <div className={style.titlle}>
              <span>Opciones de estudiante</span>
            </div>
            <div className={style.options}>
              <div className={style.optionItem}>
                <LinksAcctions title={"Cargar un estudiante"} to="/addStudents" />
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
                <LinksAcctions
                  title={"Eliminar  un estudiante"}
                  to={"/Delete"}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  class="bi bi-people-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                </svg>
              </div>
              <div className={style.optionItem}>
                <LinksAcctions title={"Buscar un estudiante"} to={"/searchStudents"} />
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

export default OptionalStudents;
