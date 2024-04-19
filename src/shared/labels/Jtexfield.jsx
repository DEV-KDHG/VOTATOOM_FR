import React from 'react'
import styles from "./JtexfieldShared.module.css"
const Jtexfield = ({ name}) => {
  return (
      < >
    
          <label className={styles.label } label>{ name}</label>  </>
  )
}

export default Jtexfield