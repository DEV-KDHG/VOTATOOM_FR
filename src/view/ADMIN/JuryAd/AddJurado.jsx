import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from 'react-router-dom';
import styles from "./AddJurado.module.css"; // Ajusta la importación de estilos según tu estructura
import HeaderLogo from "../../../Header/HeaderLogo";
import Jtexfield from "../../../shared/labels/Jtexfield";
import Inpunts from "../../../shared/inpunts/Inpunts";
import Buto from "../../../shared/buttons/Buto";

const AddJurado = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    identification: "",
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

    // Validate that all required fields are filled
    const requiredFields = ["name", "lastName", "identification"];
    const isFormValid = requiredFields.every(
      (field) => formData[field].trim() !== ""
    );

    if (!isFormValid) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Por favor, completa todos los campos.",
      });
      return; // Detener el envío del formulario si hay campos vacíos
    }

    try {
      const { name, lastName, identification } = formData;

      // Obtener token de localStorage
      const token = localStorage.getItem("jwtToken");

      // Configurar headers con el token para enviar la solicitud POST
      const response = await axios.post(
        "http://localhost:8080/api/v2/register/jury",
        {
          name,
          lastName,
          identification,
          username: identification.toString(),
          password: identification.toString(),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Incluir el token en el encabezado
          },
        }
      );

      console.log("Jurado guardado exitosamente:", response.data);
      Swal.fire({
        icon: "success",
        title: "Jurado guardado exitosamente",
        showConfirmButton: false,
        timer: 1500,
      });

      // Resetear el formulario después de enviar con éxito
      setFormData({
        name: "",
        lastName: "",
        identification: "",
      });
    } catch (error) {
      console.error("Error al guardar el jurado:", error);

      // Manejar el error con SweetAlert2
      Swal.fire({
        icon: "error",
        title: "Error",
        text:
          "Hubo un problema al guardar el jurado. Por favor, intenta nuevamente.",
      });
    }
  };

  return (
    <> <div className={styles.logo}>
    <HeaderLogo />
  </div>
  <div>
<Link to="/OptionalVeedor" >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="green"
              className="bi bi-arrow-left-circle"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
              />
            </svg>
          </Link>
</div>
    <div className={styles.page}>
      <div className={styles.container}>
       
        <div className={styles.containerForms}>
          <div className={styles.title}>
            <h1>Guardar Jurado</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className={styles.inps}>
              <Jtexfield name="Nombre" />
              <Inpunts
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.inps}>
              <Jtexfield name="Apellido" />
              <Inpunts
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.inps}>
              <Jtexfield name="Identificación" />
              <Inpunts
                type="text"
                name="identification"
                value={formData.identification}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.btn}>
              <Buto name="Guardar Jurado" type="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default AddJurado;
