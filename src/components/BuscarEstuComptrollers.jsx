import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/BuscarEstuRepresentates.css';
import Swal from 'sweetalert2';
import ComptrollerService from '../services/ComptrollerService';
import StudentService from '../services/StudentService';
import axios from 'axios';

export const BuscarEstuComptrollers = () => {
    const [datos, setDatos] = useState([]);
    const [paginaActual, setPaginaActual] = useState(1);
    const [identificacion, setIdentificacion] = useState('');
    const registrosPorPagina = 4;

    useEffect(() => {
        const token = localStorage.getItem('jwtToken');
        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        }
        obtenerEstudiantesDe10y11();
    }, [paginaActual]);

    const obtenerEstudiantesDe10y11 = async () => {
        try {
            const response = await StudentService.getEstudiantesDe10y11();
            setDatos(response.data);
        } catch (error) {
            console.error('Error al obtener estudiantes:', error);
            // Puedes mostrar una alerta de error aquí si lo deseas
        }
    };

    const buscarEstudiantePorIdentificacion = async () => {
        try {
            const response = await StudentService.buscarPorIdentificacion(identificacion);
            setDatos([response.data]);
        } catch (error) {
            console.error('Error al buscar estudiante por identificación:', error);
            // Puedes mostrar una alerta de error aquí si lo deseas
        }
    };

    const indiceInicial = (paginaActual - 1) * registrosPorPagina;

    const siguientePagina = () => {
        setPaginaActual(paginaActual + 1);
    };

    const paginaAnterior = () => {
        setPaginaActual(paginaActual - 1);
    };

    const registrarController = async (identification) => {
        try {
            await ComptrollerService.SaveComptroller(identification);
            Swal.fire({
                icon: 'success',
                title: '¡Éxito!',
                text: 'Representante registrado con éxito.',
                timer: 1800,
            });
            obtenerEstudiantesDe10y11();
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Ocurrió un error al registrar el representante.',
                text: `Mensaje de error: ${error}`,
                timer: 1800,
            });
        }
    };

    return (
        <div className="container">
            <div className='titulo'>
                <h2>Buscar Estudiante Representante a la Contraloría</h2>
                <Link to='/ContraloresRegistrados' className='imagen'>
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
                                <td><button type="button" className="btn btn-success btn-sm" onClick={() => registrarController(dato.identification)}>Registrar</button></td>
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

export default BuscarEstuComptrollers;
