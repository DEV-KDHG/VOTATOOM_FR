import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import HeaderLogo from "../../../Header/HeaderLogo";
import Inpunts from "../../../shared/inpunts/Inpunts";
import Buto from "../../../shared/buttons/Buto";
import useAuthToken from "../../../auth/useAuthToken";
import styles from './SharedStudents.module.css';
import ListStudents from "../Students/List/ListStudents";



const SharedStudents = () => {
  const { authToken } = useAuthToken();
  const [identification, setIdentification] = useState("");

  const handleInputChange = (e) => {
    setIdentification(e.target.value);
  };

  const handleSearch = async () => {
    if (!identification) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, ingresa la identificación del estudiante.',
      });
      return;
    }

    try {
      const response = await axios.get(
        `http://localhost:8080/api/v1/students1/FindByIdentification/${identification}`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`
          }
        }
      );

      if (response.data) {
        Swal.fire({
          icon: 'success',
          title: 'Estudiante encontrado',
          text: `Nombre: ${response.data.name}, Apellido: ${response.data.lastName}`,
        });
      } else {
        Swal.fire({
          icon: 'info',
          title: 'Estudiante no encontrado',
          text: 'No se encontró ningún estudiante con la identificación proporcionada.',
        });
      }
    } catch (error) {
      console.error("Error al buscar el estudiante:", error);

      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un problema al buscar el estudiante. Por favor, intenta nuevamente.',
      });
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <HeaderLogo/>
        </div>
        <div className={styles.title}>
          <h2>Buscar Estudiante por Identificación</h2>
        </div>
        <div className={styles.containerForms}>
          <Inpunts
            type="text"
            placeholder="Identificación del estudiante"
            value={identification}
            onChange={handleInputChange}
          />
          <Buto onClick={handleSearch} name="Buscar Estudiante"></Buto>
        </div>

        <div>

        <ListStudents/>

        </div>
      </div>
    </div>
  );
};

export default  SharedStudents;