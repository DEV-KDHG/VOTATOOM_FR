import React, { useState, useEffect } from "react";
import axios from "axios";
import useAuthToken from "../../../auth/useAuthToken";
import Plot from 'react-plotly.js';

import { Link } from 'react-router-dom';
function VotePersonero() {
  const { authToken } = useAuthToken(); // Obtener el token de autenticación del hook

  const [votes, setVotes] = useState([]);

  useEffect(() => {
    const fetchVotes = async () => {
      try {
        const response = await axios.get("http://localhost:8080/votes/personero", {
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
      }
    };

    fetchVotes();
  }, [authToken]); // Ejecutar cada vez que cambia el token de autenticación

  // Preparar los datos para el gráfico
  const names = votes.map(vote => vote.name);
  const voteCounts = votes.map(vote => vote.voteCount);

  return (
    <>
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

    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
      <div>

     
        <h1>Votos para el cargo de personería</h1>
        <Plot
          data={[
            {
              x: names,
              y: voteCounts,
              type: 'bar',
              marker: { color: '#38B6FF' },
            },
          ]}
          layout={{ title: '' }}
          config={{ responsive: true }}
        />
      </div>
    </div>
    </>
  );
}

export default VotePersonero;
