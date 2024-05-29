import React, { useState, useEffect } from "react";
import axios from "axios";
import useAuthToken from "../../../auth/useAuthToken";
import Plot from 'react-plotly.js';

import { Link } from 'react-router-dom';
function VoteComptroller() {
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

        const response = await axios.get("http://localhost:8080/votes/comptrollers", {
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
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign:'center', height: '100vh' }}>
      <div>
        <h1>Votos para el cargo de Contraloría</h1>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {!loading && !error && votes.length > 0 && (
          <Plot
            data={[
              {
                labels: names,
                values: voteCounts,
                type: 'pie',
                marker: {
                  colors: ['gba(60, 134, 78, 1)', 'rgba(149, 196, 160, 1)', 'rgba(66, 164, 89, 1)', 'rgba(60, 134, 78, 1)', 'rgba(75, 192, 192, 0.6)']
                },
                hoverinfo: 'label+percent',
                textinfo: 'value'
              },
            ]}
            layout={{ title: '' }}
            config={{ responsive: true }}
          />
        )}
        {!loading && !error && votes.length === 0 && (
          <p>No data available</p>
        )}
      </div>
    </div>
    </>
  );
}

export default VoteComptroller;
