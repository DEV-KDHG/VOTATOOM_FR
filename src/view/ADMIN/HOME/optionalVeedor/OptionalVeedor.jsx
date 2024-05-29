import React from 'react'
import style from '../optionalVeedor/OptionalVeedor.module.css'
import HeaderLogo from '../../../../Header/HeaderLogo';
import LinksAcctions from '../../../../shared/linksAcctions/LinksAcctions';
import { Link } from 'react-router-dom';

const OptionalVeedor = () => {
    let local =
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Ficon-icons.com%2Fes%2Ficono%2Fb%25C3%25BAsqueda-peque%25C3%25B1o%2F153439&psig=AOvVaw16K6jd1W_S2qHpscTN8csG&ust=1715094509048000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOimrImn-YUDFQAAAAAdAAAAABAE";
  return (
    <>
    <div className={style.bod}>
      <HeaderLogo/>
      <div className={style.backLink}>
          <Link to="/Home" className={style.backLink}>
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
      <div className={style.container}>
        <div className={style.listOptions}>
          <div className={style.titlle}>
            <span>Opciones de Veedor</span>
          </div>
          <div className={style.options}>
            <div className={style.optionItem}>
              <LinksAcctions title={"Crear veedor"} to={"/AddJury"} />
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
              <LinksAcctions title={"Eliminar  un veedor"} to={
     "/DeleteJury"} />
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
              <LinksAcctions title={"Listado de veedores"} to={"/listJuryAll"} />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                class="bi bi-person-lines-fill"
                viewBox="0 0 16 16"
              >
                <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default OptionalVeedor

