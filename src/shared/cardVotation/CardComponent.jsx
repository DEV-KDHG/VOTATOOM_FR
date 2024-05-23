import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/CardStyles.css';

const CardComponent = ({ image, name, lastName, grade, group, buttonText, buttonClick, isHighlighted }) => {
  return (
    <div className={`card card-container-votation ${isHighlighted ? 'highlighted' : ''}`}>
      <img src={image} className="card-img-top" alt="Card cap" />
      <div className="card-body">
        <h5 className="card-title">{name} {lastName}</h5>
        <p className="card-text">{`${grade} - ${group}`}</p>
        <div className="d-flex justify-content-center">
          <button className="btn btn-primary" onClick={buttonClick}>{buttonText}</button>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
