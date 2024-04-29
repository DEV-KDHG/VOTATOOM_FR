// useAuthToken.js
import { useEffect } from "react";
import axios from "axios";

const useAuthToken = () => {
  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
  }, []);
};

export default useAuthToken;
