import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const DeleteStudent = () => {
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
        `http://localhost:8080/api/v1/students/${identification}`
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
    <div>
      <h2>Eliminar Estudiante por Identificación</h2>
      <input
        type="text"
        placeholder="Identificación del estudiante"
        value={identification}
        onChange={handleInputChange}
      />
      <button onClick={handleDelete}>Eliminar Estudiante</button>
    </div>
  );
};

export default DeleteStudent;
