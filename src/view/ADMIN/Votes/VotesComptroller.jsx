import React, { useState, useEffect } from "react";
import axios from "axios";
import useAuthToken from "../../../auth/useAuthToken";
import Plot from 'react-plotly.js';

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
    <div>
      <h1>Votes by Comptrollers</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && votes.length > 0 && (
        <Plot
          data={[
            {
              x: names,
              y: voteCounts,
              type: 'bar',
              marker: { color: 'rgba(75, 192, 192, 0.6)' },
            },
          ]}
          layout={{ title: 'Vote Count per Comptroller' }}
          config={{ responsive: true }}
        />
      )}
      {!loading && !error && votes.length === 0 && (
        <p>No data available</p>
      )}
    </div>
  );
}

export default VoteComptroller;
