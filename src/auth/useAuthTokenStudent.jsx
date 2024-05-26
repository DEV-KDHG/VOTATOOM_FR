import { useState, useEffect } from "react";
import axios from "axios";

const useAuthTokenStudent = () => {
  const [authTokenStudent, setAuthTokenStudent] = useState(null); // Estado para almacenar el token

  useEffect(() => {
    const token = localStorage.getItem("jwtTokenStudens"); // Cambia el nombre del token para estudiantes
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setAuthTokenStudent(token); // Establecer el token en el estado
    } else {
      delete axios.defaults.headers.common["Authorization"];
      setAuthTokenStudent(null); // Establecer el token en null si no está presente
    }
  }, []); // Ejecutar solo una vez al montar el componente

  return { authTokenStudent }; // Devolver el token de autenticación para estudiantes
};

export default useAuthTokenStudent;
