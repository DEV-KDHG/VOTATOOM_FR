import axios from "axios";

const BUSCAR_TODOS_REPRESENTATES = "http://localhost:8080/api/v1/representative/findAll";
const SAVE_REPRESENTANTE_URL = "http://localhost:8080/api/v1/representative/save";
const BUSCAR_POR_IDENTIFICACION = "http://localhost:8080/api/v1/representative/findByIdentification/";
const ELIMINAR_POR_IDENTIFICACION = "http://localhost:8080/api/v1/representative/deleteByIdentification/"


class RepresentativeService {
    constructor() {
        // Obtiene el token JWT almacenado en localStorage
        this.token = localStorage.getItem('jwtToken');
    }

    SaveRepresentante(identification){
        const config = {
            headers: {
                Authorization: `Bearer ${this.token}`
            }
        };

        return axios.post(SAVE_REPRESENTANTE_URL, {identification}, config)
    }

    getAllRepresentatives() {
        // Configura la cabecera de autorización con el token JWT
        const config = {
            headers: {
                Authorization: `Bearer ${this.token}`
            }
        };

        // Realiza la solicitud HTTP utilizando axios con la cabecera configurada
        return axios.get(BUSCAR_TODOS_REPRESENTATES, config);
    }

    buscarPorIdentificacion(identificacion){
        const config = {
            headers: {
                Authorization: `Bearer ${this.token}`
            }
        };

        return axios.get(BUSCAR_POR_IDENTIFICACION + identificacion, config);

    }

    eliminarPorIdentificación(identificacion){
        const config = {
            headers: {
                Authorization: `Bearer ${this.token}`
            }
        };

        return axios.delete(ELIMINAR_POR_IDENTIFICACION + identificacion, config);
    }

}


export default new RepresentativeService();
