import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './view/Login/Login';
import Register from './view/Register/RegisterAdmin';
import Personero from './view/person/Personero';

import AddStudent from './view/featuresAdmin/Students/ADD/AddStudents'
// import ListStudents from './view/featuresAdmin/Students/List/ListStudents';
import BuscarEstuRepresentates from './components/BuscarEstuRepresentates';
import RepresentativeStored from './components/RepresentativeStored';
import BuscarEstuComptrollers from './components/BuscarEstuComptrollers';
import ComptrollerStored from './components/ComptrollerStored';
import { PersonStored } from './components/PersonStored';
import BuscarEstuPerson from './components/BuscarEstuPerson';

import ListStudentsgrade from './view/featuresJury/ListStudentsGrade';
import ListStudents from './view/featuresJury/ListStudentsGrade';
import DeleteStudent from "./view/featuresAdmin/Students/Delete/DeleteStudents";
import OptionalCandidates from "./view/homeAdministraitor/optionalCandidates/OptionalCandidates";
import OptionalStudents from "./view/homeAdministraitor/optionalStudents/OptionalStudents";
import OptionalVeedor from "./view/homeAdministraitor/optionalVeedor/OptionalVeedor";
import HomeAdministraitor from "./view/homeAdministraitor/HomeAdministraitor";
import SharedStudents from "./view/featuresAdmin/Shared/SharedStudents";
import PanelCargaAspirantes from "./components/PanelCargaAspirantes";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Register/>} />
        <Route path="/personero" element={<Personero />} />
        <Route path="/add-students" element={<AddStudent />} /> 
        <Route path="/Home" element={<HomeAdministraitor/>} /> 
        <Route path="/Delete" element={< DeleteStudent/>} /> 
        <Route path="/OptionalCandidates" element={<  OptionalCandidates/>} /> 
        <Route path="/OptionalStudents" element={<  OptionalStudents/>} /> 
        <Route path="/OptionalVeedor" element={<  OptionalVeedor/>} /> 
        <Route path="/listStudents" element={<ListStudents />} /> 

        <Route path="/listStudentsGrade" element={<ListStudentsgrade />} /> 
        <Route path="/sharedStudents" element={<SharedStudents />} /> 

        <Route path='/BuscarEstudiantesRepresentates' element={<BuscarEstuRepresentates />}></Route>
        <Route path='/representatesRegistrados' element={<RepresentativeStored />}></Route>
        <Route path='/BuscarEstudiantesContralores' element={<BuscarEstuComptrollers />}></Route>
        <Route path='/ContraloresRegistrados' element={<ComptrollerStored />}></Route>
        <Route path='/BuscarEstudiantesPersoneria' element={<BuscarEstuPerson/>} ></Route>
        <Route path='/PersonerosRegistrados' element={<PersonStored />} ></Route>
        <Route path='/PanelCargaAspirantes' element={<PanelCargaAspirantes />} ></Route>


      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
