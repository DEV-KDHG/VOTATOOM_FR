import axios from "axios";

const BUSCAR_TODOS_REPRESENTANTES_BY_GRADE = "http://localhost:8080/api/v1/representative/findAllGrade";
const BUSCAR_TODOS_CONTRALORES = "http://localhost:8080/api/v1/comptroller/list/comptrollerWithId";
const BUSCAR_TODOS_PERSONEROS = "http://localhost:8080/api/v1/personero/findAllWithId";
const REGISTRAR_VOTO = "http://localhost:8080/vote";

class VotationServices {
    constructor() {
        this.token = localStorage.getItem('jwtTokenStudens');
    }

    getAuthConfig() {
        return {
            headers: {
                Authorization: `Bearer ${this.token}`
            }
        };
    }

    getAllRepresentativesByGrade() {
        return axios.get(BUSCAR_TODOS_REPRESENTANTES_BY_GRADE, this.getAuthConfig());
    }

    getAllControllers() {
        return axios.get(BUSCAR_TODOS_CONTRALORES, this.getAuthConfig());
    }

    getAllPersons() {
        return axios.get(BUSCAR_TODOS_PERSONEROS, this.getAuthConfig());
    }

    saveVote(idRepresentante, idController, idPerson) {
        const voteData = {
            representative: { id: idRepresentante },
            comptroller: { id: idController },
            personero: { id: idPerson }
        };

        return axios.post(REGISTRAR_VOTO, voteData, this.getAuthConfig());
    }
}

export default new VotationServices();
