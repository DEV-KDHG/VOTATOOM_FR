import React, { useState, useEffect } from "react";
import axios from "axios";
import useAuthToken from "../../../auth/useAuthToken";
import Plot from 'react-plotly.js';

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
      <h1>Votes by Representatives</h1>
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
