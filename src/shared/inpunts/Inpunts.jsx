import React from 'react'
import styles from "./Input.module.css"
const Inpunts = ({ name, placeholder, value, onChange }) => {
  return (
    <input
      className={styles.Input} 
      type="text" 
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange} 
    />
  );
};

export default Inpunts;