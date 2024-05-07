import React from 'react'
import style from '../optionalCandidates/OptionalCandidates.module.css'
import CardFunctions from '../../../shared/cardFunctions/CardFunctions'
import HeaderLogo from '../../../Header/HeaderLogo'

const OptionalCandidates = () => {

    let person = "https://cdn.icon-icons.com/icons2/936/PNG/512/user-shape_icon-icons.com_73346.png";
  return (
<div className={style.container}>
    <HeaderLogo/>

    <div className={style.acctions}></div>
    <div className={style.title}>
      <h1> Aspirantes</h1>
      <div className={style.container_cards}>
        <CardFunctions
          img={person}
          to={"/optionsOfStudents"}
          name={"Personero"}
        />
        <CardFunctions
          img={person}
          to={"/optionsOCandidates"}
          name={"Representante"}
        />
        <CardFunctions
          img={person}
          to={"/optionsOfVeedor"}
          name={"Contralor"}
        />
      </div>
    </div>
  </div>
  )
}

export default OptionalCandidates