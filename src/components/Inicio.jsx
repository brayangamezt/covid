import React,{useEffect} from 'react';
import world from '../assets/images/covidWorld.PNG';
import '../assets/Scss/inicio.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Inicio = () => {

  useEffect(() => {
    AOS.init({
        offset: 120, // offset (in px) from the original trigger point
        delay: 500, // values from 0 to 3000, with step 50ms
        duration: 400, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom',
      });
    });

  return (
    <React.Fragment>
      <div className='first-home'>
        <h2>Actualmente hay <span>510,904,768</span> casos de coronavirus confirmados al rededor del mundo</h2>
        <img className='world-image' src={world} alt="world" />
      </div>
      <div className='inicio-bloque-1' data-aos='fade-up'>
        <h2>Han muerto al rededor de 6,225,063 personas</h2>
        <p>Esa es una tasa de mortalidad del 1%. En comparación, la tasa de mortalidad por gripe estacional suele ser de alrededor del 0,1 % en los EE. UU., según The New York Times.</p>
      </div>
      <div className='inicio-bloque-2' data-aos='fade-up'>
        <h2>A partir de hoy, se espera que mueran 6,149,214 personas más.</h2>
        <p>
        Usando la tasa de mortalidad, se espera que esta cantidad de personas muera por coronavirus en las próximas semanas.
        Algunos casos de coronavirus no se informan, lo que significa que la tasa de mortalidad real puede ser menor.
        </p>
      </div>
      <div className='inicio-bloque-1' data-aos='fade-up'>
        <h2>504.679.705 siguen en tratamiento.</h2>
        <p>Eso es el 99% de todos los casos que todavía están en el hospital en este momento.</p>
      </div>
      <div className='inicio-bloque-2' data-aos='fade-up'>
        <h2>Quédate en casa.</h2>
        <p>La mejor manera de prevenir la propagación de la enfermedad es quedarse en casa.</p>
      </div>
    </React.Fragment>
  )
}

export default Inicio