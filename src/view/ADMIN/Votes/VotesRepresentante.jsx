import React, { useState, useEffect } from "react";
import axios from "axios";
import useAuthToken from "../../../auth/useAuthToken";
import Plot from 'react-plotly.js';
import { Link } from 'react-router-dom';
function VotesRepresentante() {
  const { authToken } = useAuthToken(); // Obtener el token de autenticación del hook

  const [votes, setVotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVotes = async () => {
      setLoading(true);
      setError(null);

      try {
        // Depuración: imprimir el token JWT
        console.log("Auth Token:", authToken);

        const response = await axios.get("http://localhost:8080/votes/representatives", {
          headers: {
            Authorization: `Bearer ${authToken}` // Incluir el token de autenticación en la solicitud
          }
        });

        if (response.status !== 200) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        
        setVotes(response.data); // Establecer los votos en el estado
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (authToken) {
      fetchVotes();
    } else {
      setLoading(false);
      setError("No authentication token found");
    }
  }, [authToken]); // Ejecutar cada vez que cambia el token de autenticación

  // Definir una lista de colores para las barras
  const colors = [ '#6B98FA', '#EF50E0', '#39B6B6', '#378AFA' , '#FF5757', '#FFDE59', '#BF97CB', '#6AF182',];

  // Agrupar los votos por grado
  const groupedVotes = votes.reduce((acc, vote) => {
    const { grado, name, voteCount } = vote;
    if (!acc[grado]) {
      acc[grado] = [];
    }
    acc[grado].push({ name, voteCount });
    return acc;
  }, {});

  return (
    <div>
      <div>
<Link to="/OptionalVotos" >
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
      <h1>Votos para representantes de grado</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && Object.keys(groupedVotes).length > 0 ? (
        Object.keys(groupedVotes).map((grado, index) => (
          <div key={grado} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <h2>Grado {grado}</h2>
            <Plot
              data={[
                {
                  x: groupedVotes[grado].map(vote => vote.name),
                  y: groupedVotes[grado].map(vote => vote.voteCount),
                  type: 'bar',
                  marker: { color: colors[index % colors.length] }, // Asignar colores de la lista de colores
                },
              ]}
              layout={{ title: `Conteo de votos grado ${grado}` }}
              style={{ width: '60%', height: '400px' }}
              config={{ responsive: true }}
            />
          </div>
        ))
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}

export default VotesRepresentante;
