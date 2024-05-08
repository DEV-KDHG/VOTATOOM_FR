import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './view/Login/Login';
import Register from './view/Register/RegisterAdmin';
import Personero from './view/person/Personero';

import ListStudentsgrade from './view/featuresJury/ListStudentsGrade';
import AddStudent from './view/featuresAdmin/Students/ADD/AddStudents';
import ListStudents from './view/featuresJury/ListStudentsGrade';
import DeleteStudent from "./view/featuresAdmin/Students/Delete/DeleteStudents";
import OptionalCandidates from "./view/homeAdministraitor/optionalCandidates/OptionalCandidates";
import OptionalStudents from "./view/homeAdministraitor/optionalStudents/OptionalStudents";
import OptionalVeedor from "./view/homeAdministraitor/optionalVeedor/OptionalVeedor";
import HomeAdministraitor from "./view/homeAdministraitor/HomeAdministraitor";
import SharedStudents from "./view/featuresAdmin/Shared/SharedStudents";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Register/>} />
        <Route path="/personero" element={<Personero />} />
        <Route path="/Home" element={<HomeAdministraitor/>} /> 
        <Route path="/Delete" element={< DeleteStudent/>} /> 
        <Route path="/OptionalCandidates" element={<  OptionalCandidates/>} /> 
        <Route path="/OptionalStudents" element={<  OptionalStudents/>} /> 
        <Route path="/OptionalVeedor" element={<  OptionalVeedor/>} /> 
        <Route path="/addStudents" element={<AddStudent />} /> 
        <Route path="/listStudents" element={<ListStudents />} /> 
        <Route path="/listStudentsGrade" element={<ListStudentsgrade />} /> 
        <Route path="/sharedStudents" element={<SharedStudents />} /> 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
