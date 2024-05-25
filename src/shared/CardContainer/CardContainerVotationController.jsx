import React, { useEffect, useState } from 'react';
import CardComponent from '../cardVotation/CardComponent';
import VotationServices from '../../services/VotationServices';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/CardStyles.css';
import defaultImage from '../../assets/perfil_vacio.png';

const CardContainerVotationController = () => {
  // localStorage.setItem('jwtTokenStudens', 'eyJhbGciOiJIUzM4NCJ9.eyJpZGVudGlmaWNhdGlvbiI6Miwic3ViIjoiNzM3MjM1NTU1MjMzIiwiaWF0IjoxNzE2NDM2MDY0LCJleHAiOjE3MTY1MjI0NjR9.yWW-4DLb5YldM5JyG5SFBqAtwIHKaLKPlH5AdLECZGicwPlyjKeXNYHuESlnH2sv');

  const [controllers, setControllers] = useState([]);
  const [highlightedId, setHighlightedId] = useState(null);

  useEffect(() => {
    VotationServices.getAllControllers()
      .then(response => {
        setControllers(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  const handleButtonClick = (id) => {
    if (id !== null && id !== undefined) { // Validación general para IDs válidos
      setHighlightedId(id);
      localStorage.setItem('idController', id); // Guardar el ID en localStorage
      console.log('ID del Contralor seleccionado: ' + id);
    } else {
      console.error('ID inválido: ' + id);
    }
  };

  return (
    <div className="container mt-4">
      <div className="card-container-votation-wrapper">
        <div className='tituloComponente'><span>Representantes a la contraloría</span></div>
        <div className="row">
          {controllers.map(rep => (
            <div className="col-md-3" key={rep.id}>
              <CardComponent
                image={rep.image || defaultImage}
                name={rep.name}
                lastName={rep.lastName}
                grade={rep.grade}
                group={rep.group}
                buttonText="Seleccionar"
                buttonClick={() => handleButtonClick(rep.id)}
                isHighlighted={highlightedId === rep.id}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardContainerVotationController;
