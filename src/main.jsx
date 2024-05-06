import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./view/Login/Login";
import Personero from "./view/person/Personero";
import AddStudent from "./view/featuresAdmin/Students/AddStudents";
import ListStudents from "./view/featuresAdmin/Students/ListStudents";
import HomeAdministraitor from "./view/homeAdministraitor/HomeAdministraitor";
import Students from "./view/Students/Students";
 
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/testing" element={<HomeAdministraitor />} />
        <Route path="/student" element={<Students />} />
    
        <Route path="/personero" element={<Personero />} />
        <Route path="/add-students" element={<AddStudent />} />
        <Route path="/listStudents" element={<ListStudents />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
