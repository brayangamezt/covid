import React from 'react';
import '../assets/Scss/tratamiento.scss'

const Tratamiento = () => {
  return (
    <div className='tratamientos-container'>
      <h3>Si has estado en contacto con alguien que tenga la COVID-19, sigue estos pasos:</h3>
      <ul>
        <li>Lávate las manos con frecuencia.</li>
        <li>Quédate en una habitación aislada del resto de los miembros de tu familia y, si no es posible, lleva puesta la mascarilla</li>
        <li>Si compartes el dormitorio con otras personas, debe haber una separación de al menos 1 metro entre las camas.</li>
        <li>Controla tus síntomas durante 14 días.</li>
        <li>Mantén una distancia de al menos 1 metro con otras personas, incluidos tus familiares.</li>
        <li>Durante el periodo de cuarentena, no vayas al trabajo, a clase ni a lugares públicos. Si necesitas algo de fuera, pide a alguien que te lo lleve.</li>
      </ul>
    </div>
  )
}

export default Tratamiento