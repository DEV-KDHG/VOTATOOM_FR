import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../LoginStudents/LoginStudents.module.css";
import axios from "axios";
import Swal from "sweetalert2"; // Importa SweetAlerts
import Inpunts from "../../../shared/inpunts/Inpunts";
import Jtexfield from "../../../shared/labels/Jtexfield";
import Buto from "../../../shared/buttons/Buto";

import HeaderLoguin from "../../../Headers/HeaderLoguin";

const LoginStudents = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    code: "",
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
        "http://localhost:8080/api/v2/login/students",
        formData
      );

      if (response.status === 200) {
        const data = response.data;
        localStorage.setItem("jwtTokenStudens", data.token);

        // Mostrar alerta de éxito
        Swal.fire({
          icon: "success",
          title: "Inicio de sesión exitoso",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          window.location.href = '/SalaVotation'; // Reemplaza '/home' con tu URL de destino
        });
      } else {
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
        text: "Error al procesar la solicitud, por favor vuelva a intentarlo",
      });
      console.error('Error en la solicitud:', error);
    }
  };

  return (
    <div className={styles.page}>
      <div className="logo">
        <HeaderLoguin />
      </div>
      <div className={styles.container}>
        <div className={styles.containerForms}>
          <div className={styles.title}>
            <h1> Iniciar sesión Students</h1>
          </div>

          <div className={styles.formulario}>
            <form onSubmit={handleSubmit}>
              <div className={styles.inps}>
                <Jtexfield name="Nombre de usuario" />
                <Inpunts
                  name="username"
                  placeholder="Ingrese su nombre de usuario"
                  value={formData.username}
                  onChange={handleInputChange}
                />
              </div>
              <div className={styles.inps}>
                <Jtexfield name="Código" />
                <Inpunts
                  name="code"
                  placeholder="Ingrese su código único"
                  value={formData.code}
                  onChange={handleInputChange}
                />
              </div>
              <div className={styles.inps}>
                <Jtexfield name="Contraseña" />
                <Inpunts
                  name="password"
                  placeholder="Ingrese su contraseña"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </div>
              <div className={styles.btn}>
                <Buto name="Iniciar sesión" type="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginStudents;
