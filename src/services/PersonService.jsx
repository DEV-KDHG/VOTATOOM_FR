import axios from "axios";

const BUSCAR_TODOS_PERSONS = "http://localhost:8080/api/v1/personero/findAll"
const SAVE_PERSON_URL = "http://localhost:8080/api/v1/personero/save"
const BUSCAR_POR_IDENTIFICACION = "http://localhost:8080/api/v1/personero/findByIdentification/"
const ELIMINAR_POR_IDENTIFICACION = "http://localhost:8080/api/v1/personero/delete/"

class PersonService {
    constructor() {
        // Obtiene el token JWT almacenado en localStorage
        this.token = localStorage.getItem('jwtToken');
    }

    SavePerson(identification){
        const config = {
            headers: {
                Authorization: `Bearer ${this.token}`
            }
        };

        return axios.post(SAVE_PERSON_URL, {identification}, config)
    }

    
    getAllPerson() {
        // Configura la cabecera de autorización con el token JWT
        const config = {
            headers: {
                Authorization: `Bearer ${this.token}`
            }
        };

        // Realiza la solicitud HTTP utilizando axios con la cabecera configurada
        return axios.get(BUSCAR_TODOS_PERSONS, config);
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

export default new PersonService();