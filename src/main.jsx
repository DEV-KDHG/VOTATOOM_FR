
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './view/Login/Login';
import Register from './view/Register/RegisterAdmin';
import Personero from './view/person/Personero';
import AddStudent from './view/featuresAdmin/Students/ADD/AddStudents'
import ListStudents from './view/featuresAdmin/Students/List/ListStudents';
import BuscarEstuRepresentates from './components/BuscarEstuRepresentates';
import RepresentativeStored from './components/RepresentativeStored';
import BuscarEstuComptrollers from './components/BuscarEstuComptrollers';
import ComptrollerStored from './components/ComptrollerStored';
import { PersonStored } from './components/PersonStored';
import BuscarEstuPerson from './components/BuscarEstuPerson';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Register/>} />
        <Route path="/personero" element={<Personero />} />
        <Route path="/add-students" element={<AddStudent />} /> 
        <Route path="/listStudents" element={<ListStudents />} /> 
        <Route path='/BuscarEstudiantesRepresentates' element={<BuscarEstuRepresentates />}></Route>
        <Route path='/representatesRegistrados' element={<RepresentativeStored />}></Route>
        <Route path='/BuscarEstudiantesContralores' element={<BuscarEstuComptrollers />}></Route>
        <Route path='/ContraloresRegistrados' element={<ComptrollerStored />}></Route>
        <Route path='/BuscarEstudiantesPersoneria' element={<BuscarEstuPerson/>} ></Route>
        <Route path='/PersonerosRegistrados' element={<PersonStored />} ></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

