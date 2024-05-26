import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Inpunts from "../../shared/inpunts/Inpunts";
import Buto from "../../shared/buttons/Buto";
import HeaderLogo from "../../Header/HeaderLogo";
import styles from "./ListStudentsGrade.module.css";
import useAuthTokenJury from "../../auth/useAuthTokenJury"; // Importamos la función para obtener el token de jury

const ListStudentsGrade = () => {
  const { authTokenJury } = useAuthTokenJury(); // Obtenemos el token de jury
  const [students, setStudents] = useState([]);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [studentsPerPage] = useState(5);
  const [identification, setIdentification] = useState("");

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/v1/students1/findAll`,
          {
            headers: {
              Authorization: `Bearer ${authTokenJury}`, 
            
            },
          }
          
        );
        console.log(authTokenJury)
console.log(response.data)
        setStudents(response.data);
        setError("");
      } catch (error) {
        console.error("Error en la solicitud:", error);
        setError("Error al cargar estudiantes: " + error.message);
      }
    };

    fetchStudents(); // Realizar la llamada a la API al montar el componente
  }, [authTokenJury]); // Añadimos authTokenJury como dependencia

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
            Authorization: `Bearer ${authTokenJury}`,
          },
        }
      );

      if (response.data) {
        Swal.fire({
          icon: 'success',
          title: 'Estudiante encontrado',
          text: `Nombre: ${response.data.name}, Apellido: ${response.data.lastName}, codigo:${response.data.code} , identificación:${response.data.identification}`,  
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

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = students.slice(indexOfFirstStudent, indexOfLastStudent);

  return (
    <div className={styles.page}>
      <div className={styles.logo}>
        <HeaderLogo />
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
          className={styles.input}
        />
        <Buto onClick={handleSearch} name="Buscar Estudiante" className={styles.button} />
      </div>
      {error && <p className={styles.errorMessage}>{error}</p>}
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Grado</th>
              <th>Identificación</th>
              <th>Código</th>
            </tr>
          </thead>
          <tbody>
            {currentStudents.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.lastName}</td>
                <td>{student.grade}</td>
                <td>{student.identification}</td>
                <td>{student.code}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => paginate(1)}>
              First
            </button>
          </li>
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => paginate(currentPage - 1)}>
              Previous
            </button>
          </li>
          {Array.from({ length: Math.ceil(students.length / studentsPerPage) }, (_, index) => index + 1).map((number) => (
            <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
              <button className="page-link" onClick={() => paginate(number)}>
                {number}
              </button>
            </li>
          ))}
          <li className={`page-item ${currentPage === Math.ceil(students.length / studentsPerPage) ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => paginate(currentPage + 1)}>
              Next
            </button>
          </li>
          <li className={`page-item ${currentPage === Math.ceil(students.length / studentsPerPage) ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => paginate(Math.ceil(students.length / studentsPerPage))}>
              Last
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ListStudentsGrade;
