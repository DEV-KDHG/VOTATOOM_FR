import React, { useState, useEffect } from 'react';
import '../styles/BuscarEstuRepresentates.css';
import PersonService from '../services/PersonService'
import Swal from 'sweetalert2';


export const PersonStored = () => {

     // localStorage.setItem('jwtToken', 'eyJhbGciOiJIUzM4NCJ9.eyJpZGVudGlmaWNhdGlvbiI6MSwic3ViIjoicHJ1ZWJhMTIzNDUiLCJpYXQiOjE3MTQ1NzQyMTQsImV4cCI6MTcxNDY2MDYxNH0.aWv2c_CUpS2Ef9ORB6NRBG-bAB0S42yo7qesjF4b6X2-WO11ODawWYgnq2plvp4P');

     const [datos, setDatos] = useState([]);
     const [paginaActual, setPaginaActual] = useState(1);
     const [identificacion, setIdentificacion] = useState('');
 
     const registrosPorPagina = 4;
 
     useEffect(() => {
         obtenerPerson();
     }, [paginaActual]);
 
     const obtenerPerson = async () => {
         try {
             const response = await PersonService.getAllPerson();
             setDatos(response.data);
             console.log(response.data);
         } catch (error) {
             console.error('Error al obtener personeros:', error);
         }
     };
 
     const buscarPersonPorIdentificacion = async () => {
         try {
             const response = await PersonService.buscarPorIdentificacion(identificacion);
             setDatos([response.data]);
         } catch (error) {
             console.error('Error al buscar personero por identificación:', error);
         }
     };
 
     const eliminarPersonPorIdentificacion = async (identificacion) => {
         try {
             await PersonService.eliminarPorIdentificación(identificacion);
             obtenerPerson();
             Swal.fire({
                 icon: 'success',
                 title: '¡Éxito!',
                 text: 'Personero eliminado con éxito.',
                 timer: 2000,
             });
         } catch (error) {
             console.error('Error al eliminar Personero por identificación:', error);
             Swal.fire({
                 icon: 'error',
                 title: 'Ocurrió un error al eliminar el Personero.',
                 text: `Mensaje de error: ${error}`,
                 timer: 1800,
             });
         }
     };
 
     const indiceInicial = (paginaActual - 1) * registrosPorPagina;
 
     const siguientePagina = () => {
         setPaginaActual(paginaActual + 1);
     };
 
     const paginaAnterior = () => {
         setPaginaActual(paginaActual - 1);
     };
 
     return (
         <div className="container">
             <div className='titulo'>
                 <h2>Personeros Registrados</h2>
             </div>
             <div className="container-browser">
                 <div className="input-group mb-3">
                     <input
                         type="number"
                         className="form-control"
                         placeholder="Digite número de identificación del Personero..."
                         value={identificacion}
                         onChange={(e) => setIdentificacion(e.target.value)}
                     />
                     <button
                         className="btn btn-outline-secondary"
                         type="button"
                         onClick={buscarPersonPorIdentificacion}
                     >
                         Buscar
                     </button>
                 </div>
             </div>
             <div className="container-tabla-datos">
                 <table className="table rounded table-hover table-striped">
                     <thead>
                         <tr>
                             <th>N°</th>
                             <th>Nombre</th>
                             <th>Apellido</th>
                             <th>Identificación</th>
                             <th>Grado</th>
                             <th>Grupo</th>
                             <th>Acción</th>
                         </tr>
                     </thead>
                     <tbody>
                         {datos.slice(indiceInicial, indiceInicial + registrosPorPagina).map((dato, index) => (
                             <tr key={indiceInicial + index}>
                                 <td>{indiceInicial + index + 1}</td>
                                 <td>{dato.name}</td>
                                 <td>{dato.lastName}</td>
                                 <td>{dato.identification}</td>
                                 <td>{dato.grade}</td>
                                 <td>{dato.group}</td>
                                 <td>
                                     <button
                                         type="button"
                                         className="btn btn-danger btn-sm"
                                         onClick={() => eliminarPersonPorIdentificacion(dato.identification)}
                                     >
                                         Eliminar
                                     </button>
                                 </td>
                             </tr>
                         ))}
                     </tbody>
                 </table>
                 <div className="paginacion">
                     <button className="btn btn-primary btn-sm" onClick={paginaAnterior} disabled={paginaActual === 1}>Anterior</button>
                     <button className="btn btn-danger btn-sm" onClick={siguientePagina} disabled={datos.length <= (paginaActual * registrosPorPagina)}>Siguiente</button>
                 </div>
             </div>
         </div>
     );

}