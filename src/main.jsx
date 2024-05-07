import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './view/Login/Login';
import Register from './view/Register/RegisterAdmin';
import Personero from './view/person/Personero';
// import AddStudent from './view/featuresAdmin/Students/AddStudents';
// import ListStudents from './view/featuresAdmin/Students/ListStudents';
import ListStudentsgrade from './view/featuresJury/ListStudentsGrade';
import AddStudent from './view/featuresAdmin/Students/ADD/AddStudents';
import ListStudents from './view/featuresJury/ListStudentsGrade';
import DeleteStudent from "./view/featuresAdmin/Students/Delete/DeleteStudents";
import OptionalCandidates from "./view/homeAdministraitor/optionalCandidates/OptionalCandidates";
import OptionalStudents from "./view/homeAdministraitor/optionalStudents/OptionalStudents";
import OptionalVeedor from "./view/homeAdministraitor/optionalVeedor/OptionalVeedor";
import HomeAdministraitor from "./view/homeAdministraitor/HomeAdministraitor";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Register/>} />
        <Route path="/personero" element={<Personero />} />
        <Route path="/add-students" element={<AddStudent />} /> 
        <Route path="/Home" element={<HomeAdministraitor/>} /> 
        <Route path="/Eliminar" element={< DeleteStudent/>} /> 
        <Route path="/OptionalCandidates" element={<  OptionalCandidates/>} /> 
        <Route path="/OptionalStudents" element={<  OptionalStudents/>} /> 
        <Route path="/OptionalVeedor" element={<  OptionalVeedor/>} /> 
        <Route path="/listStudents" element={<ListStudents />} /> 
        <Route path='/BuscarEstudiantesRepresentates' element={<BuscarEstuRepresentates />}></Route>
        <Route path='/representatesRegistrados' element={<RepresentativeStored />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
