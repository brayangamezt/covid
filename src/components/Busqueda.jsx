import React,{useState} from 'react';
import '../assets/Scss/busqueda.scss';

const Busqueda = () => {
  const [pais,setPais]=useState('');
  const [paises,setPaises]=useState();


  const handleCountry=async(e)=>{
    e.preventDefault();
    const respuesta= await fetch(`https://covid-api.mmediagroup.fr/v1/cases?country=${pais}`);
    const datos=await respuesta.json();
    setPaises(datos);
  }

  return (
    <div className='mainContainer-search'>
      <div className='firstContainer-search'>
        <p>
          Obten informacion sobre los casos de un pais en especifico introduciendo
          el nombre en el formulario de la parte inferior, asegurate de colocar la primera
          letra en mayuscula EJEMPLO: Mexico,Colombia etc.
        </p><br />
        <form onSubmit={handleCountry} >
          <label htmlFor="city">Ciudad</label><br />
          <input type="text" placeholder='Introduce pais' value={pais} onChange={ (e)=>{setPais(e.target.value)}} /><br />
          <button type='submit'>Buscar</button>
        </form>
      </div>
      <div className='secondContainer-search'>
        {
          paises &&
          <div>
            <p>-Pais: {paises.All.country}</p>
            <p>-Poblcacion: {paises.All.population}</p>
            <p>-Casos confirmados: {paises.All.confirmed}</p>
            <p>-numero de muertes: {paises.All.deaths} </p>
            <p>-Expectativa de vida: {paises.All.life_expectancy} años</p>
          </div>
        }
      </div>
    </div>
  )
}

export default Busqueda