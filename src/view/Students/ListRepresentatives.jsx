import React, { useState, useEffect } from "react";
import axios from "axios";

const ListRepresentatives = () => {
  const [representatives, setRepresentatives] = useState([]);

  useEffect(() => {
    const fetchRepresentatives = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/v1/representative/findAllGrade");
        if (response.data) {
          setRepresentatives(response.data);
        }
      } catch (error) {
        console.error("Error fetching representatives:", error);
      }
    };

    fetchRepresentatives();
  }, []); // Empty dependency array to run the effect only once on component mount

  return (
    <div>
      <h1>Listado de Representantes</h1>
      {representatives.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Foto</th>
              <th>Identificación</th>
              <th>Grado</th>
              <th>Grupo</th>
            </tr>
          </thead>
          <tbody>
            {representatives.map((representative) => (
              <tr key={representative.identification}>
                <td>{representative.name}</td>
                <td>{representative.photo}</td>
                <td>{representative.identification}</td>
                <td>{representative.grade}</td>
                <td>{representative.group}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No hay representantes disponibles.</p>
      )}
    </div>
  );
};

export default ListRepresentatives;
