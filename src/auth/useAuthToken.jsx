import { useState, useEffect } from "react";
import axios from "axios";

const useAuthToken = () => {
  const [authToken, setAuthToken] = useState(null); // Estado para almacenar el token

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setAuthToken(token); // Establecer el token en el estado
    } else {
      delete axios.defaults.headers.common["Authorization"];
      setAuthToken(null); // Establecer el token en null si no está presente
    }
  }, []); // Ejecutar solo una vez al montar el componente

  return { authToken }; // Devolver el token de autenticación
};

export default useAuthToken;
