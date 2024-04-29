import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";
import axios from "axios";
import Jtexfield from "../../shared/labels/Jtexfield";
import Inpunts from "../../shared/inpunts/Inpunts";
import Buto from "../../shared/buttons/Buto";
import HeaderLogo from '../../Header/HeaderLogo';

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");

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
        setIsLoggedIn(true);
        setTimeout(() => {
          window.location.href = '/listStudents'; // Redirección después de 100 milisegundos
        }, 100);
      } else {
        setError("Inicio de sesión fallido");
      }
    } catch (error) {
      setError("Error al procesar la solicitud: " + error.message);
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
                  
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
  
      {error && <p>{error}</p>}
    </>
  );
};

export default Login;
