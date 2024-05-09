import React, { useState, useEffect } from 'react';
import '../styles/BuscarEstuRepresentates.css';
import { Link } from 'react-router-dom';
import RepresentativeService from '../services/RepresentativeService';
import Swal from 'sweetalert2';
import StudentService from '../services/StudentService';
import axios from 'axios'; // Importa axios

export const BuscarEstuRepresentates = () => {

    // Establecer el token JWT en el almacenamiento local
    localStorage.setItem('jwtToken', 'eyJhbGciOiJIUzM4NCJ9.eyJpZGVudGlmaWNhdGlvbiI6MSwic3ViIjoicHJ1ZWJhMTIzNDUiLCJpYXQiOjE3MTUwNTI1NDgsImV4cCI6MTcxNTEzODk0OH0.EMdBILEuLIlRCP8IFDE7cA7eksLxyXqdpGPBUPH9SA9_M3D7Oaqw7FdcfZGDLWSd');

    // Estado para almacenar los datos de los estudiantes
    const [datos, setDatos] = useState([]);
    const [paginaActual, setPaginaActual] = useState(1);
    const [identificacion, setIdentificacion] = useState('');
    const registrosPorPagina = 4;

    useEffect(() => {
        // Configura el token JWT en la instancia de axios
        const token = localStorage.getItem('jwtToken');
        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        }

        obtenerEstudiantes();
    }, [paginaActual]); // Ejecuta el efecto cuando cambia la página actual

    const obtenerEstudiantes = async () => {
        try {
            const response = await StudentService.getAllEstudiantes();
            setDatos(response.data);
        } catch (error) {
            console.error('Error al obtener estudiantes:', error);
        }
    };

    const buscarEstudiantePorIdentificacion = async () => {
        try {
            const response = await StudentService.buscarPorIdentificacion(identificacion);
            setDatos([response.data]);
        } catch (error) {
            console.error('Error al buscar estudiante por identificación:', error);
        }
    };

    const indiceInicial = (paginaActual - 1) * registrosPorPagina;

    const siguientePagina = () => {
        setPaginaActual(paginaActual + 1);
    };

    const paginaAnterior = () => {
        setPaginaActual(paginaActual - 1);
    };

    const registrarRepresentante = async (identification) => {
        try {
            await RepresentativeService.SaveRepresentante(identification);
            Swal.fire({
                icon: 'success',
                title: '¡Éxito!',
                text: 'Representante registrado con éxito.',
                timer: 1800,
            });
            obtenerEstudiantes(); // Actualiza la lista de estudiantes después de registrar uno nuevo
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error al registrar el representante.',
                text: `Revise que no este registrado `,
                timer: 1800,
            });
        }
    };

    return (
        <div className="container">
            <div className='titulo'>
                <h2>Buscar Estudiante Representante al Consejo</h2>
                <Link to='/representatesRegistrados' className='imagen'>
                    <img className='img' src="src\assets\eye.svg" alt="Representantes" />
                </Link>
            </div>
            <div className="container-browser">
                <div className="input-group mb-3">
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Digite número identificación del estudiante..."
                        value={identificacion}
                        onChange={(e) => setIdentificacion(e.target.value)}
                    />
                    <button
                        className="btn btn-outline-secondary"
                        type="button"
                        onClick={buscarEstudiantePorIdentificacion}
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
                                <td><button type="button" className="btn btn-success btn-sm" onClick={() => registrarRepresentante(dato.identification)}>Registrar</button></td>
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
};

export default BuscarEstuRepresentates;
