import React from "react";
import "../Headers/HeaderAdmin.css";
import { Link } from "react-router-dom";

export const HeaderAtras = ({ tituloHeader,route }) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <img className="imgHeaderAdmin" src="src/assets/logo_U.png" alt="" />
                    <a className="navbar-brand" href="#"></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item titulo">
                                Votatoom | {tituloHeader}
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item titulo">
                                <Link to={route}>
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
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default HeaderAtras;
