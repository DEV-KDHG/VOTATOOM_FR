import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";



import Login from "./view/LoginAndRegister/Login/Login";
import Register from "./view/LoginAndRegister/Register/RegisterAdmin";
import Personero from "./view/TARJETAS/Personero";
import HomeAdministraitor from "./view/ADMIN/HOME/HomeAdministraitor";
import DeleteStudent from "./view/ADMIN/Students/Delete/DeleteStudents";

import OptionalStudents from "./view/ADMIN/HOME/optionalStudents/OptionalStudents";
import OptionalVeedor from "./view/ADMIN/HOME/optionalVeedor/OptionalVeedor";
import ListStudents from "./view/ADMIN/Students/List/ListStudents";
import ListStudentsGrade from "./view/JURY/ListStudentsGrade";
import SearchStudents from "./view/ADMIN/Students/SearchStudents/SearchStudents";
import BuscarEstuRepresentates from "./view/ADMIN/candidates/Representantes/BuscarEstuRepresentates";
import RepresentativeStored from "./view/ADMIN/candidates/Representantes/RepresentativeStored";
import BuscarEstuComptrollers from "./view/ADMIN/candidates/Contralor/BuscarEstuComptrollers";
import ComptrollerStored from "./view/ADMIN/candidates/Contralor/ComptrollerStored";
import { PersonStored } from "./view/ADMIN/candidates/Personero/PersonStored";
import BuscarPerson from "./view/ADMIN/candidates/Personero/BuscarEstuPerson";
import AddStudents from "./view/ADMIN/Students/ADD/AddStudent"
import PanelCargaAspirantes from "./view/ADMIN/candidates/panel/PanelCargaAspirantes";
import AddJurado from "./view/ADMIN/JuryAd/AddJurado";
import HeaderAdmin from "./HeaderAdmin/HeaderAdmin";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/Register" element={<Register />} />
        <Route path="/personero" element={<Personero />} />
        <Route path="/AddStudents" element={<AddStudents/>} />
        <Route path="/Home" element={<HomeAdministraitor />} />
        <Route path="/Delete" element={<DeleteStudent />} />
        <Route path="/AddJury" element={<AddJurado/>} />
        <Route path="/OptionalStudents" element={<OptionalStudents />} />

        <Route path="/OptionalVeedor" element={<OptionalVeedor/>} />

        <Route path="/listStudents" element={<ListStudents />} />

        <Route path="/listStudentsGrade" element={<ListStudentsGrade/>} /> 
        <Route path="/searchStudents" element={<SearchStudents />} /> 

        <Route path='/BuscarEstudiantesRepresentates' element={<BuscarEstuRepresentates />}></Route>
        <Route path='/representatesRegistrados' element={<RepresentativeStored />}></Route>
        <Route path='/BuscarEstudiantesContralores' element={<BuscarEstuComptrollers />}></Route>
        <Route path='/ContraloresRegistrados' element={<ComptrollerStored/>}></Route>
        <Route path='/BuscarEstudiantesPersoneria' element={<BuscarPerson/>} ></Route>
        <Route path='/PersonerosRegistrados' element={<PersonStored/>} ></Route>
        <Route path='/PanelCargaAspirantes' element={<PanelCargaAspirantes/>} ></Route>
        
        <Route path='/HeaderAdmi' element={<HeaderAdmin/>} ></Route>
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
