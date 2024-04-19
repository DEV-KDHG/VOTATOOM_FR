import React from 'react'
import Buto from "../buttons/Buto";
import styles from "./Tarjet.module.css";
const TarjetCandidates = () => {
  return (
    <>
    <div className={styles.containerForms}>
   <form  action="" className={styles.forms}>

    <img src="src\shared\tarjetCandidates\universidad-de-cartagena-colombia-colores-planos-logo-29D4150EAF-seeklogo.com (1).png" alt="foto students" />
    <h2>Postulacion</h2>
    <h3>Nombre</h3>
  <Buto name={"VOTAR"}/>
   </form>
   </div>
    </>
  )
}

export default TarjetCandidates