import React from 'react'
import styles from "./Register.module.css"
import Jtexfield from "../../shared/labels/Jtexfield";
import Inpunts from "../../shared/inpunts/Inpunts";
import Buto from "../../shared/buttons/Buto";
import HeaderLogo from "../../Header/HeaderLogo";

const Register = () => {
  return (
    <>
      <div className={styles.page}>
        <div className="logo">
          <HeaderLogo />
        </div>
        <div className={styles.container}>
          <div className={styles.containerForms}>
            <div className={styles.title}>
              <h1>Registrarse</h1>
            </div>
            <div className={styles.formulario}>
              <div className={styles.inps}>
                <Jtexfield name={"Nombre"} />
                <Inpunts name={"text"} placeholder={"xxxxx"} />
              </div>
              <div className={styles.inps}>
                <Jtexfield name={"N° de identificación"} />
                <Inpunts name={"text"} placeholder={"xxxxx"} />
              </div>
              <div className={styles.inps}>
                <Jtexfield name={"digite su contraseña"} />
                <Inpunts className={styles.inp} name={"pass"} placeholder={"xxxxx"} />
              </div>
              <div className={styles.btn}>
                <Buto name={"Registrarse"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};



export default Register;
