import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";
import axios from "axios";
import Swal from "sweetalert2"; // Importa SweetAlerts

import Jtexfield from "../../shared/labels/Jtexfield";
import Inpunts from "../../shared/inpunts/Inpunts";
import Buto from "../../shared/buttons/Buto";
import HeaderLogo from '../../Header/HeaderLogo';

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v2/login/admin",
        formData
      );
      if (response.status === 200) {
        const data = response.data;
        localStorage.setItem("jwtToken", data.token);
        console.log(data.token);
        // Mostrar alerta de éxito
        Swal.fire({
          icon: "success",
          title: "Inicio de sesión exitoso",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          // Redirección después de la alerta
          window.location.href = '/Home';
        });
      } else {
        // Mostrar alerta de error
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Inicio de sesión fallido",
        });
      }
    } catch (error) {
    
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Error al procesar la solicitud, por favor vuelva a intentarlo " ,
      });
    }
  };

  return (
    <>
      <div className={styles.page}>
        <div className="logo">
          <HeaderLogo />
        </div>
        <div className={styles.container}>
          <div className={styles.containerForms}>
            <div className={styles.title}>
              <h1> Iniciar sesión </h1>
            </div>

            <div className={styles.formulario}>
              <form onSubmit={handleSubmit}>
                <div className={styles.inps}>
                  <Jtexfield name={"Nombre de usuario"} />
                  <Inpunts
                    name={"username"}
                    placeholder={"xxxxx"}
                    onChange={handleInputChange}
                  />
                </div>

                <div className={styles.inps}>
                  <Jtexfield name={"digite su contraseña"} />
                  <Inpunts
                    className={styles.inp}
                    name={"password"}
                    placeholder={"xxxxx"}
                    type="password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                </div>
                <div className={styles.btn}>
                  <Buto name={"iniciar sesión"} type="submit" />
                  <Link to="/Register">
                    <Buto name={"Registrarse"} />
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
