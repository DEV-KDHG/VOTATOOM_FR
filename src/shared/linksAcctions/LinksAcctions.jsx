import React from 'react';

const LinksAcctions = ({ icon , title}) => {
  return (
    <div> 
          <div className={ icon}>
        <img src={icon} alt="" />
      </div>
      <div className="title">
        <span>{title}</span>
      </div>
    </div>
  );
}

export default LinksAcctions;
