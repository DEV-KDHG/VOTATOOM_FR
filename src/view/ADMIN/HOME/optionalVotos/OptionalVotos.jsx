import React from 'react'
import style from '../optionalVotos/OptionalVotos.module.css'
import HeaderLogo from '../../../../Header/HeaderLogo';
import LinksAcctions from '../../../../shared/linksAcctions/LinksAcctions';
import { Link } from 'react-router-dom';
import HeaderAdmin from '../../../../Headers/HeaderAdmin'

const OptionalVotos = () => {
  let local =
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Ficon-icons.com%2Fes%2Ficono%2Fb%25C3%25BAsqueda-peque%25C3%25B1o%2F153439&psig=AOvVaw16K6jd1W_S2qHpscTN8csG&ust=1715094509048000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOimrImn-YUDFQAAAAAdAAAAABAE";
  return (
    <>
      <div className={style.bod}>
      <HeaderAdmin tituloHeader="Panel De Estadisticas"/>
        <div className={style.container}>
          <div className={style.listOptions}>
            <div className={style.titlle}>
              <span>Conteos de Votos</span>
            </div>
            <div className={style.options}>
              <div className={style.optionItem}>
                <LinksAcctions title={"Conteo de votos personero"} to={"/VotePersonero"} />
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                </svg>
              </div>
              <div className={style.optionItem}>
                <LinksAcctions title={"Conteo de votos contralor"} to={
                  "/VoteComptroller"} />
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
                  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                </svg>
              </div>

              <div className={style.optionItem}>
                <LinksAcctions title={"Conteo de votos representantes"} to={"/VotesRepresentante"} />
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-person-vcard" viewBox="0 0 16 16">
                  <path d="M5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4m4-2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5M9 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 9 8m1 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5" />
                  <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8.96q.04-.245.04-.5C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1 1 0 0 1 1 12z" />
                </svg>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OptionalVotos

