import React from 'react';
import { Link } from 'react-router-dom';
import '../linksAcctions/LinksAcctions.css'; 



const LinksAcctions = ({ icon, title, to }) => {
  return (
    <div className="links-actions-container">
  
      <div className="links-actions-icon">
        <img src={icon} alt="" />
      </div>
    
      <div>
      
        <Link to={to} className="links-actions-link">
          {title}
        </Link>
      </div>
    </div>
  );
};

export default LinksAcctions;
