import React from "react"
import "../Headers/HeaderAdmin.css"
import { Link } from "react-router-dom";

export const HeaderHomeAdmin = ({tituloHeader}) => {
    return (
        <>

            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <img className="imgHeaderAdmin" src="src\assets\logo_U.png" alt="" />
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
                            <li className="nav-item titulo"   >
                                <Link to='/LoginAdmin'>
                                <img className="imgHome" src="src\assets\Logout.svg" alt="Home" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>




        </>
    )
}

export default HeaderHomeAdmin;