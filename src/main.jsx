
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './view/Login/Login';
import Register from './view/Register/RegisterAdmin';
import Personero from './view/person/Personero';

import ListStudentsgrade from './view/featuresJury/ListStudentsGrade';
import AddStudent from './view/featuresAdmin/Students/ADD/AddStudents';
import ListStudents from './view/featuresJury/ListStudentsGrade';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Register/>} />
        <Route path="/personero" element={<Personero />} />
        <Route path="/addStudents" element={<AddStudent />} /> 
        <Route path="/listStudents" element={<ListStudents />} /> 
        <Route path="/listStudentsGrade" element={<ListStudentsgrade />} /> 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

