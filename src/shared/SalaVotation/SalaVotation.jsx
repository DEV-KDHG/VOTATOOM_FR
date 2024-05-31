import React, { useState } from "react";

import CardContainerVotationController from "../CardContainer/CardContainerVotationController";
import CardContainerVotationRepresentative from "../CardContainer/CardContainerVotationRepresentative";
import CardContainerVotationPerson from "../CardContainer/CardContainerVotationPerson";
import '../../styles/SalaVotacion.css';
import HeaderSalaVotacion from "../../Headers/HeaderSalaVotacion";
import VotationServices from "../../services/VotationServices";
import Swal from "sweetalert2";

export const SalaVotation = () => {
    const [error, setError] = useState(null);


    const handleVote = () => {
        const idRepresentante = localStorage.getItem('idRepresentative');
        const idController = localStorage.getItem('idController');
        const idPerson = localStorage.getItem('idPerson');

        console.log("ID Representante:", idRepresentante);
        console.log("ID Controller:", idController);
        console.log("ID Person:", idPerson);

        // Verificar si se han seleccionado todos los representantes
        if (!idRepresentante || !idController || !idPerson) {
            const errorMessage = "Debe seleccionar representantes de todos los estamentos.";
            Swal.fire({
                icon:  "error",
                title: "Error en el proceso",
                text: errorMessage,
                timer: 3000
            })
            setError(errorMessage); // Actualizar el estado de error
            return; // Salir de la función si no se han seleccionado todos los representantes
        }

        // Si se han seleccionado representantes de todos los estamentos, limpiar el error
        setError(null);

        VotationServices.saveVote(idRepresentante, idController, idPerson)
            .then(response => {
                console.log("Voto registrado correctamente:", response.data);

                Swal.fire({
                    icon:  "success",
                    title: "Votación Exitosa",
                    text: "Voto registrado correctamente. Su sesión se cerrara automaticamente",
                    timer: 5000
                })
                // Limpiar los IDs almacenados en localStorage después de enviar el voto
                localStorage.removeItem('idRepresentante');
                localStorage.removeItem('idController');
                localStorage.removeItem('idPerson');

                // Redirigir a la ruta "/"
                window.location.href ='/';
            })
            .catch(error => {
                console.error("Hubo un error al registrar el voto:", error);
            });
    };

    return (
        <>
            <div>
                <HeaderSalaVotacion />
            </div>

            <div className="ContainerPrincipalSala">
                <CardContainerVotationRepresentative />
                <CardContainerVotationController />
                <CardContainerVotationPerson />
            </div>

            <div className="botonDeVotacion">
                <a href="#" className="btn btnVotar btn-success" onClick={handleVote}>VOTAR</a>
            </div>

            {error && <div className="error-message">{error}</div>}
        </>
    );
}

export default SalaVotation;
