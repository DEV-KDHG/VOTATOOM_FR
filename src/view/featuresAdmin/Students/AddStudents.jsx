import React, { useState } from "react";
import axios from "axios";
import Inpunts from "../../../shared/inpunts/Inpunts";
import Buto from "../../../shared/buttons/Buto";
import Jtexfield from "../../../shared/labels/Jtexfield";
import useAuthToken from "../../../auth/useAuthToken";

const AddStudent = () => {
  const [formData, setFormData] = useState({
    username: "",
    name: "",
    lastName: "",
    password: "",
    grade: "",
    identification: "",
  });
  console.log(useAuthToken);
  useAuthToken();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/students/register/students1",
        formData
      );

      console.log("Estudiante guardado exitosamente:", response.data);
      alert("Estudiante guardado exitosamente");

      setFormData({
        username: "",
        name: "",
        lastName: "",
        password: "",
        grade: "",
        identification: "",
      });
    } catch (error) {
      console.error("Error al guardar el estudiante:", error);
    }
  };

  return (
    <div>
       <div className="logo">
          <HeaderLogo />
        </div>
      <h2>Guardar Estudiante</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <Jtexfield name="Nombre de Usuario" />
          <Inpunts
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <Jtexfield name="Nombre" />
          <Inpunts
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <Jtexfield name="Apellido" />
          <Inpunts
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <Jtexfield name="Contraseña" />
          <Inpunts
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <Jtexfield name="Grado" />
          <Inpunts
            type="text"
            name="grade"
            value={formData.grade}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <Jtexfield name="Identificación" />
          <Inpunts
            type="text"
            name="identification"
            value={formData.identification}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <Buto name="Guardar Estudiante" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default AddStudent;
