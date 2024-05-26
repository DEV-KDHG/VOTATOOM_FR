import { useState, useEffect } from "react";
import axios from "axios";

const useAuthTokenJury = () => {
  const [authTokenJury, setAuthTokenJury] = useState(null); // Estado para almacenar el token

  useEffect(() => {
    const token = localStorage.getItem("juryJwtToken"); // Cambia el nombre del token para el jurado
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setAuthTokenJury(token); // Establecer el token en el estado
    } else {
      delete axios.defaults.headers.common["Authorization"];
      setAuthTokenJury(null); // Establecer el token en null si no está presente
    }
  }, []); // Ejecutar solo una vez al montar el componente

  return { authTokenJury }; // Devolver el token de autenticación para el jurado
};

export default useAuthTokenJury;
