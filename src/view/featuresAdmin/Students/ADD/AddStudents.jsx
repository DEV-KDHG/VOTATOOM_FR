import React, { useState } from "react";
import axios from "axios";
import Inpunts from "../../../../shared/inpunts/Inpunts";
import Jtexfield from "../../../../shared/labels/Jtexfield";
import useAuthToken from "../../../../auth/useAuthToken";
import HeaderLogo from "../../../../Header/HeaderLogo";
import Buto from "../../../../shared/buttons/Buto";
import styles from './AddStudents.module.css';
import Swal from "sweetalert2";

const AddStudent = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    grade: "",
    identification: "",
    group: "",
    password: "", // Deja la contraseña en blanco por defecto
  });

  useAuthToken();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar que todos los campos requeridos estén llenos
    const requiredFields = ["name", "lastName", "grade", "identification", "group"];
    const isFormValid = requiredFields.every(field => formData[field].trim() !== '');

    if (!isFormValid) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, completa todos los campos.',
      });
      return; // Detener el envío del formulario si hay campos vacíos
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/students/register/students1",
        {
          name: formData.name,
          lastName: formData.lastName,
          grade: formData.grade,
          identification: formData.identification,
          group: formData.group,
          password: formData.password, // Incluye la contraseña en la solicitud
        }
      );

      console.log("Estudiante guardado exitosamente:", response.data);
      Swal.fire({
        icon: 'success',
        title: '',
        showConfirmButton: false,
        timer: 1500
      });

      Swal.fire({
        icon: 'success',
        title: 'Estudiante guardado exitosamente, ¡Recuerde que el usuario y contraseña del estudiante essu identificación!',
        showConfirmButton: false,
        timer: 1500
      });
      setFormData({
        name: "",
        lastName: "",
        grade: "",
        identification: "",
        group: "",
        password: "", // Restablece la contraseña a vacío
      });
    } catch (error) {
      console.error("Error al guardar el estudiante:", error);

      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un problema al guardar el estudiante. Por favor, intenta nuevamente. ¡revise la identificacion!',
      });
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <HeaderLogo />
        </div>
        <div className={styles.containerForms}>
          <div className={styles.title}>
            <h1>Guardar Estudiante</h1>
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
            <div className={styles.inps}>
              <Jtexfield name="Grado" />
              <select
                name="grade"
                value={formData.grade}
                onChange={handleInputChange}
              >
                <option value="">Selecciona el Grado</option>
                {Array.from({ length: 11 }, (_, index) => (
                  <option key={index + 1} value={index + 1}>
                    {index + 1}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.inps}>
              <Jtexfield name="Grupo" />
              <select
                name="group"
                value={formData.group}
                onChange={handleInputChange}
              >
                <option value="">Selecciona el Grupo</option>
                {Array.from({ length: 4 }, (_, index) => (
                  <option key={index + 1} value={index + 1}>
                    {index + 1}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.btn}>
              <Buto name="Guardar Estudiante" type="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddStudent;
