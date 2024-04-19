import React from 'react'
import TarjetCandidates from '../../shared/tarjetCandidates/TarjetCandidates'
import styles from"./Person.module.css";
const Personero = () => {
  return (
    <>
   <div className={styles.containerTarjet}> <TarjetCandidates/></div>
    
    </>
  )
}

export default Personero