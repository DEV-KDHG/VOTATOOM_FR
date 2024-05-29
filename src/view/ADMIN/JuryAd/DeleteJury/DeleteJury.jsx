import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import useAuthToken from "../../../../auth/useAuthToken";
import Inpunts from "../../../../shared/inpunts/Inpunts";
import Buto from "../../../../shared/buttons/Buto";
import { Link } from 'react-router-dom';
import HeaderLogo from '../../../../Header/HeaderLogo';
import styles from './DeleteJury.module.css';
import ListJury from "../ListJury/Listjury";

const DeleteJury = () => {
  const { authToken } = useAuthToken(); // Obtiene el token de autenticación del hook useAuthToken
  const [identification, setIdentification] = useState("");

  const handleInputChange = (e) => {
    setIdentification(e.target.value);
  };

  const handleDelete = async () => {
    if (!identification) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, ingresa la identificación del jurado.',
      });
      return;
    }

    try {
      const response = await axios.delete(
        `http://localhost:8080/api/v2/delete/jury/${identification}`,
        {
          headers: {
            Authorization: `Bearer ${authToken}` // Incluye el token de autenticación en los headers
          }
        }
      );

      console.log("Jurado eliminado exitosamente:", response.data);
      Swal.fire({
        icon: 'success',
        title: 'Jurado eliminado exitosamente',
        showConfirmButton: false,
        timer: 1500
      });

      setIdentification(""); // Limpiar la identificación después de eliminar
    } catch (error) {
      console.error("Error al eliminar el jurado:", error);

      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un problema al eliminar el jurado. Por favor, intenta nuevamente.',
      });
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.logo}>
     
    <HeaderLogo />
 
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
        </div>
        <div className={styles.title}>
          <h2>Eliminar Jurado por Identificación</h2>
        </div>
        <div className={styles.containerForms}>
          <Inpunts
            type="text"
            placeholder="Identificación del jurado"
            value={identification}
            onChange={handleInputChange}
          />
          <Buto onClick={handleDelete} name="Eliminar Jurado" />
          <div className={styles.ListJury}>
            <ListJury />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteJury;
