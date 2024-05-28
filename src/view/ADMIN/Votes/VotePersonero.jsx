import React, { useState, useEffect } from "react";
import axios from "axios";
import useAuthToken from "../../../auth/useAuthToken";
import Plot from 'react-plotly.js';

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
    <div>
      <h1>Votes by Personeros</h1>
      <Plot
        data={[
          {
            x: names,
            y: voteCounts,
            type: 'bar',
            marker: { color: 'rgba(75, 192, 192, 0.6)' },
          },
        ]}
        layout={{ title: 'Vote Count per Personero' }}
        config={{ responsive: true }}
      />
    </div>
  );
}

export default VotePersonero;

