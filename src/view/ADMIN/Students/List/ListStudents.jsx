import React, { useState, useEffect } from "react";
import axios from "axios";
import useAuthToken from "../../../../auth/useAuthToken";
import "./ListStudents.css";

const ListStudents = () => {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [studentsPerPage] = useState(5); // Cambia esto según la cantidad de estudiantes por página

  useAuthToken();

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const token = localStorage.getItem("jwtToken");
        const response = await axios.get(
          `http://localhost:8080/api/v1/students1/findAll?page=${currentPage}&size=${studentsPerPage}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setStudents(response.data);
        setError("");
      } catch (error) {
        console.error("Error en la solicitud:", error);
        setError("Error al cargar estudiantes: " + error.message);
      }
    };

    fetchStudents();
  }, [currentPage, studentsPerPage]);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = students.slice(indexOfFirstStudent, indexOfLastStudent);

  return (
    <div>
      {error && <p>{error}</p>}
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

export default ListStudents;