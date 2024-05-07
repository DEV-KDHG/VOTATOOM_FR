import React from "react";
import style from "./CardFunctions.module.css";
import { Link } from "react-router-dom";

const CardFunctions = ({ to, name, img }) => {
  return (
    <div className={style.container}>
      <div className={style.cards}>
        <img className={style.photo} src={img} alt="" />
        <Link to={to} className={style.btn}>
          {name}
        </Link>
      </div>
    </div>
  );
};

export default CardFunctions;
