import React from 'react';
import { connect } from 'react-redux';
import '../assets/Scss/sintomas.scss';

const Sintomas = ({serios,masHabituales,menosHabituales}) => {


  return (
    <div className='main-sintoma'>
      <h4 className='encabezado'>
      La COVID-19 afecta de distintas maneras en función de cada persona.
      La mayoría de las personas que se contagian presentan síntomas de intensidad leve o moderada, y se recuperan sin necesidad de hospitalización.
      </h4>

      <div className='sintomas'>
      <p>Los síntomas más habituales son los siguientes:</p>
        {
          masHabituales.map( (elemento,index)=>{
            return(
              <ul className='lista-sintomas' key={index}>
                <li className='sintoma'>{elemento.nombre}</li>
              </ul>
            )
          } )
        }
      </div>

      <div className='sintomas'>
      <p>Los síntomas menos habituales son los siguientes:</p>
        {
          menosHabituales.map( (elemento,index)=>{
            return(
              <ul className='lista-sintomas' key={index}>
                <li className='sintoma'>{elemento.nombre}</li>
              </ul>
            )
          } )
        }
      </div>

      <div className='sintomas'>
        <p>Los síntomas serios son los siguientes:</p>
        {
          serios.map( (elemento,index)=>{
            return(
              <ul className='lista-sintomas' key={index}>
                <li className='sintoma'>{elemento.nombre}</li>
              </ul>
            )
          } )
        }
      </div>

    </div>
  )
}

const mapStateToProps=(estado)=>{
  return{
    masHabituales:estado.masHabituales,
    menosHabituales:estado.menosHabituales,
    serios:estado.serios
  }
}

export default connect(mapStateToProps)(Sintomas);