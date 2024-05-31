import React from 'react'
// import HeaderLogo from '../../../../Header/HeaderLogo'
import HeaderAtras from '../../../../Headers/HeaderAtras';
import ListJury from '../ListJury/Listjury'

import { Link } from 'react-router-dom';
const ListAll = () => {
  return (
    <div>
      <HeaderAtras route="/OptionalVeedor"/>
      <ListJury />
    </div>
  )
}

export default ListAll