import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../../../../styles/BuscarEstuRepresentates.css"
import Swal from 'sweetalert2';
import PersonService from '../../../../services/PersonService'
import StudentService from '../../../../services/StudentService';
import HeaderAtras from '../../../../Headers/HeaderAtras'

export const BuscarPerson = () => {

    // Establecer el token JWT en el almacenamiento local
    //localStorage.setItem('jwtToken', 'eyJhbGciOiJIUzM4NCJ9.eyJpZGVudGlmaWNhdGlvbiI6MSwic3ViIjoicHJ1ZWJhMTIzNDUiLCJpYXQiOjE3MTUxNDM1NzEsImV4cCI6MTcxNTIyOTk3MX0.O607IdcGB2oBKY52mzoMyGxun8347aXOFt-tXhpmG8XiLr0hPzvrwdjmlNbF8sOm');

    // Estado para almacenar los datos de los estudiantes
    const [datos, setDatos] = useState([]);

    // Estado para almacenar la página actual de la tabla
    const [paginaActual, setPaginaActual] = useState(1);

    // Estado para almacenar la identificación ingresada por el usuario
    const [identificacion, setIdentificacion] = useState('');

    // Número de registros a mostrar por página
    const registrosPorPagina = 4;

    // Efecto para cargar los datos de los estudiantes al inicializar el componente o al cambiar la página
    useEffect(() => {
        obtenerEstudiantesDeSolo11();
    }, [paginaActual]); // Agrega paginaActual como dependencia para que se vuelva a obtener al cambiar la página


    // Función para obtener los datos de los estudiantes
    const obtenerEstudiantesDeSolo11 = async () => {
        try {
            const response = await StudentService.getEstudiantesSoloDe11();
            setDatos(response.data);
        } catch (error) {
            console.error('Error al obtener estudiantes:', error);
        }
    };


    // Función para buscar un estudiante por identificación
    const buscarEstudiantePorIdentificacion = async () => {
        try {
            const response = await StudentService.buscarPorIdentificacion(identificacion);
            setDatos([response.data]);
        } catch (error) {
            console.error('Error al buscar estudiante por identificación:', error);
            // Manejar el error según sea necesario
        }
    };


    // Calcula el índice inicial de los datos a mostrar en la página actual
    const indiceInicial = (paginaActual - 1) * registrosPorPagina;


    // Función para avanzar a la siguiente página
    const siguientePagina = () => {
        setPaginaActual(paginaActual + 1);
    };


    // Función para retroceder a la página anterior
    const paginaAnterior = () => {
        setPaginaActual(paginaActual - 1);
    };


    // Función para registrar un representante
    const registrarPerson = async (identification) => {
        try {
            await PersonService.SavePerson(identification);
            // Muestra un mensaje de éxito utilizando SweetAlert2
            Swal.fire({
                icon: 'success',
                title: '¡Éxito!',
                text: 'Personero registrado con éxito.',
                timer: 1800,
            });
            // Actualiza la lista de estudiantes después de registrar uno nuevo
            obtenerEstudiantesDeSolo11();
        } catch (error) {
            // Muestra un mensaje de error utilizando SweetAlert2
            Swal.fire({
                icon: 'error',
                title: 'Ocurrió un error al registrar el Personero.',
                text: `Mensaje de error: ${error}`,
                timer: 1800,
            });
        }
    };


    return (
        <>
            <HeaderAtras route="/PanelCargaAspirantes" tituloHeader='Buscar Estudiantes Personeria'/>
            <div className="container">
                {/* Encabezado del componente */}
                <div className='titulo'>
                    <h2>Buscar Estudiante Representante a la Personeria</h2>
                    {/* <a className='imagen' href="#"><img className='img' src="src\assets\eye.svg" alt="Representantes" /></a> */}
                    <Link to='/PersonerosRegistrados' className='imagen'>
                        <img className='img' src="src\assets\eye.svg" alt="Representantes" />
                    </Link>

                </div>
                {/* Barra de búsqueda */}
                <div className="container-browser">
                    <div className="input-group mb-3">
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Digite numero identificacion del estudiante..."
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
                {/* Tabla de datos */}
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
                            {/* Mapeo de los datos para mostrarlos en la tabla */}
                            {datos.slice(indiceInicial, indiceInicial + registrosPorPagina).map((dato, index) => (
                                <tr key={indiceInicial + index}>
                                    <td>{indiceInicial + index + 1}</td>
                                    <td>{dato.name}</td>
                                    <td>{dato.lastName}</td>
                                    <td>{dato.identification}</td>
                                    <td>{dato.grade}</td>
                                    {/* Botón para registrar el representante */}
                                    <td><button type="button" className="btn btn-success btn-sm" onClick={() => registrarPerson(dato.identification)}>Registrar</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {/* Paginación */}
                    <div className="paginacion">
                        <button className="btn btn-primary btn-sm" onClick={paginaAnterior} disabled={paginaActual === 1}>Anterior</button>
                        <button className="btn btn-danger btn-sm" onClick={siguientePagina} disabled={datos.length <= (paginaActual * registrosPorPagina)}>Siguiente</button>
                    </div>
                </div>
            </div>

        </>
    );

}

export default BuscarPerson;