import React, { useState, useEffect } from "react";
import axios from "axios";
import useAuthToken from "../../../../auth/useAuthToken";
import "./ListJury.css";
import { Link } from 'react-router-dom';
import HeaderLogo from "../../../../Header/HeaderLogo";

const ListJury = () => {
  const [juries, setJuries] = useState([]);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [juriesPerPage] = useState(5); // Cambia esto según la cantidad de jurados por página

  useAuthToken();

  useEffect(() => {
    const fetchJuries = async () => {
      try {
        const token = localStorage.getItem("jwtToken");
        const response = await axios.get(
          `http://localhost:8080/api/v2/findAll/jury?page=${currentPage}&size=${juriesPerPage}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setJuries(response.data);
        setError("");
      } catch (error) {
        console.error("Error en la solicitud:", error);
        setError("Error al cargar jurados: " + error.message);
      }
    };

    fetchJuries();
  }, [currentPage, juriesPerPage]);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfLastJury = currentPage * juriesPerPage;
  const indexOfFirstJury = indexOfLastJury - juriesPerPage;
  const currentJuries = juries.slice(indexOfFirstJury, indexOfLastJury);

  return (
    <>
 
<div>
      {error && <p>{error}</p>}
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Identificación</th>
           
            </tr>
          </thead>
          <tbody>
            {currentJuries.map((jury) => (
              <tr key={jury.id}>
                <td>{jury.name}</td>
                <td>{jury.lastName}</td>
                <td>{jury.identification}</td>
            
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
          {Array.from({ length: Math.ceil(juries.length / juriesPerPage) }, (_, index) => index + 1).map((number) => (
            <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
              <button className="page-link" onClick={() => paginate(number)}>
                {number}
              </button>
            </li>
          ))}
          <li className={`page-item ${currentPage === Math.ceil(juries.length / juriesPerPage) ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => paginate(currentPage + 1)}>
              Next
            </button>
          </li>
          <li className={`page-item ${currentPage === Math.ceil(juries.length / juriesPerPage) ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => paginate(Math.ceil(juries.length / juriesPerPage))}>
              Last
            </button>
          </li>
        </ul>
      </nav>
      </div>
    </>
  );
};

export default ListJury;
