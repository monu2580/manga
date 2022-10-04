import React from 'react'
import './index.css'
import { ButtonCompType } from './Interface/ButtonCompType'
function ButtonComp({ title, id, active, onClick }:ButtonCompType) {
  return (
    <button
      id={`${id}`}
      className={active ? 'active' : '' }
      onClick={()=>onClick(title)}
    >{title}</button>
  )
}

export default ButtonComp