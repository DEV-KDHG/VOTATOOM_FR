import React from 'react'
import styles from "./Input.module.css"
const Inpunts = ({ name, placeholder}) => {
  return (
      < > <input  className={styles.Input} type={name} placeholder={placeholder } /> </>
  )
}

export default Inpunts