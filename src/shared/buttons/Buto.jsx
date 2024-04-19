import React from 'react'
import styles from "./Buto.module.css"
const Buto = ({ name , onClick}) => {
  return (
    <>
  
      <button className={styles.buton } onClick={onClick}>{ name}</button>
    </>
  )
}

export default Buto