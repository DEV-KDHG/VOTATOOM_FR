import React from "react";
import "../../../../styles/PanelCargaAspirantes.css";
import { Link } from "react-router-dom";
import HeaderLogo from "../../../../Header/HeaderLogo";

const PanelCargaAspirantes = () => {
    return (
        <>
      
      
       <HeaderLogo/>
       <div className="backLink">
          <Link to="/Home" >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="green"
              className="bi bi-arrow-left-circle"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
              />
            </svg>
          </Link>
        </div>
      <div>
        <nav className="panel-carga-aspirantes">
            <div className="titulo-con-imagen">
                <h1>Carga Aspirantes</h1>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="currentColor"
                    className="bi bi-arrow-up-circle"
                    viewBox="0 0 16 16"
                >
                    <path
                        fillRule="evenodd"
                        d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z"
                    />
                </svg>
            </div>
            <ul className="opciones">
                <li>
                    <Link to='/BuscarEstudiantesRepresentates'>
                        <button>CONSEJO</button>
                    </Link>
                </li>
                <li>
                    <Link to='/BuscarEstudiantesContralores'>
                        <button>CONTRALORIA</button>
                    </Link>
                </li>
                <li>
                    <Link to='/BuscarEstudiantesPersoneria'>
                        <button>PERSONERIA</button>
                    </Link>
                </li>
            </ul>
        </nav>
        </div>
        </>
    );
};

export default PanelCargaAspirantes;
