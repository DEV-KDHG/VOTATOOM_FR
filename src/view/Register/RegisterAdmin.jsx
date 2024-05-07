import React, { useState } from "react";
import styles from "./Register.module.css";
import axios from "axios";
import HeaderLogo from "../../Header/HeaderLogo";
import Inpunts from "../../shared/inpunts/Inpunts";
import Swal from "sweetalert2";

const Register = () => {
  const initialState = {
    username: "",
    name: "",
    lastName: "",
    identification: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    for (const key in formData) {
      if (formData[key].trim() === "") {
        await Swal.fire({
          title: "Error!",
          text: `El campo '${key}' no puede estar vacío.`,
          icon: "error",
          confirmButtonText: "OK",
        });
        return;
      }
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/api/v2/register/admin",
        formData
      );
      if (response.status === 200) {
        const data = response.data;
        localStorage.setItem("jwtToken", data.token);
        await Swal.fire({
          title: "Éxito!",
          text: "Usuario creado exitosamente.",
          icon: "success",
          confirmButtonText: "OK",
          customClass: {
            popup: styles.myCustomPopupClass,
            title: styles.myCustomTitleClass,
            content: styles.myCustomTextClass,
            confirmButton: styles.myCustomConfirmButtonClass,
          },
        });
        // Redirigir a la página de inicio de sesión
        window.location.href = "/login";
      } else {
        console.error("Registro fallido");
      }
    } catch (error) {
      console.error("Error al procesar la solicitud:", error);
    }
  
  };

  return (
    <>
      <div className={styles.page}>
        <div className={styles.logo}>
          <HeaderLogo />
        </div>
        <div className={styles.container}>
          <div className={styles.containerForms}>
            <div className={styles.title}>
              <h1>Registrarse como Administrador</h1>
            </div>
            <div className={styles.formulario}>
              <form onSubmit={handleSubmit}>
                {}
                <div className={styles.inps}>
                  <Inpunts
                    type="text"
                    placeholder="Nombre de usuario"
                    value={formData.username}
                    onChange={handleInputChange}
                    name="username"
                    required
                  />
                </div>
                <div className={styles.inps}>
                  <Inpunts
                    type="text"
                    placeholder="Nombre"
                    value={formData.name}
                    onChange={handleInputChange}
                    name="name"
                    required
                  />
                </div>
                <div className={styles.inps}>
                  <Inpunts
                    type="text"
                    placeholder="Apellido"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    name="lastName"
                    required
                  />
                </div>
                <div className={styles.inps}>
                  <Inpunts
                    type="text"
                    placeholder="Identificación"
                    value={formData.identification}
                    onChange={handleInputChange}
                    name="identification"
                    required
                  />
                </div>
                <div className={styles.inps}>
                  <Inpunts
                    type="password"
                    placeholder="Contraseña"
                    value={formData.password}
                    onChange={handleInputChange}
                    name="password"
                    required
                  />
                </div>
                {}
                <div className={styles.btn}>
                  <button type="submit">Registrarse</button>
                 
                </div>
    
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
