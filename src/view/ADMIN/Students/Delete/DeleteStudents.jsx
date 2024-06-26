import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import useAuthToken from "../../../../auth/useAuthToken";
import Inpunts from "../../../../shared/inpunts/Inpunts";

import Buto from "../../../../shared/buttons/Buto";
import ListStudents from "../List/ListStudents";
import HeaderLogo from '../../../../Header/HeaderLogo';
import styles from './Delete.module.css';
import HeaderAtras from "../../../../Headers/HeaderAtras";

const DeleteStudent = () => {
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
        text: 'Por favor, ingresa la identificación del estudiante.',
      });
      return;
    }

    try {
      const response = await axios.delete(
        `http://localhost:8080/api/v1/students/deleteByIdentification/${identification}`,
        {
          headers: {
            Authorization: `Bearer ${authToken}` // Incluye el token de autenticación en los headers
          }
        }
      );

      console.log("Estudiante eliminado exitosamente:", response.data);
      Swal.fire({
        icon: 'success',
        title: 'Estudiante eliminado exitosamente',
        showConfirmButton: false,
        timer: 1500
      });

      setIdentification(""); // Limpiar la identificación después de eliminar
    } catch (error) {
      console.error("Error al eliminar el estudiante:", error);

      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un problema al eliminar el estudiante. Por favor, intenta nuevamente.',
      });
    }
  };

  return (
    <>
    <HeaderAtras route="/OptionalStudents" tituloHeader='Eliminar Estudiante'/>
    <div className="styles.page">
      <div className={styles.container}>

        <div className={styles.title}> <h2>Eliminar Estudiante por Identificación</h2></div>
        <div className={styles.containerForms}>

          <Inpunts
            type="text"
            placeholder="Identificación del estudiante"
            value={identification}
            onChange={handleInputChange}
          />
          <Buto onClick={handleDelete} name="Eliminar Estudiante"></Buto>
          <div className={styles.ListStudents}>

            <ListStudents />
          </div>
        </div>
        <div>

        </div>
      </div>
    </div>
    </>

  );
};

export default DeleteStudent;
