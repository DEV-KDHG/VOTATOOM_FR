import axios from "axios";

const ESTUDIANTES_URL = "http://localhost:8080/api/v1/students1/api/v1/students1";
const SAVE_REPRESENTANTE_URL = "http://localhost:8080/api/v1/representative/save";
const BUSCAR_POR_IDENTIFICACION_URL = "http://localhost:8080/api/v1/students1/FindByIdentification/";

class EstudiantesService {
    constructor() {
        // Obtiene el token JWT almacenado en localStorage
        this.token = localStorage.getItem('jwtToken');
    }

    getAllEstudiantes() {
        // Configura la cabecera de autorización con el token JWT
        const config = {
            headers: {
                Authorization: `Bearer ${this.token}`
            }
        };

        // Realiza la solicitud HTTP utilizando axios con la cabecera configurada
        return axios.get(ESTUDIANTES_URL, config);
    }


    buscarPorIdentificacion(identification) {
        const config = {
            headers: {
                Authorization: `Bearer ${this.token}`
            }
        };

        return axios.get(BUSCAR_POR_IDENTIFICACION_URL + identification, config)
    }

}

export default new EstudiantesService();
