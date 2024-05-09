import React, { useState, useEffect } from "react";
import axios from "axios";

import useAuthToken from "../../auth/useAuthToken";

const ListStudentsGrade = () => {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState("");


  useAuthToken(); 

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const token = localStorage.getItem("jwtToken");

        const response = await axios.get(
          "http://localhost:8080/api/v1/students1/students/findByGrade/{grade}",
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
  }, []);

  return (
    <div>

      {error && <p>{error}</p>}
      <div>
      <table>
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
          {students.map((student) => (
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
      
    </div>
  );
};

export default ListStudentsGrade ;
