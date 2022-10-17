import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCity } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import '../assets/css/header.css';

function Header() {

    //Conseguir la posicion del dispositivo
    navigator.geolocation.getCurrentPosition((position) => {
        let latitud = position.coords.latitude;
        let longitud = position.coords.longitude;
        const key = "ff2d53493f9ed1db8d882ce2559ea553";
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=${key}&units=metric`;
        fetch(url).then(response => response.json()).then(items => {
            const city = document.querySelector("#city-name");
            city.textContent = items.name;
            const clim = document.querySelector("#city-weather");
            clim.textContent = `${items.main.temp}º`;
        });
    },
        (error) => {
            console.log(error);
        });


    const fecha = new Date();
    const year = fecha.getFullYear();
    const month = fecha.getMonth();
    const day = fecha.getDay(); //Dia de la semana (1-7)
    const monthday = fecha.getDate();//Dia del mes(1-30)
    const daysWeek = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
    const currentDay = daysWeek[day];
    const monthYear = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Dic'];
    const currentMonth = monthYear[month];

    setInterval(function () {
        let hora = moment().format('hh:mm:ss a');
        let reloj = document.querySelector("#reloj");
        reloj.innerHTML = hora;
    }, 1000)


    return (
        <div id='date-container'>
            <div id='main-date'>
                <p id='weather-header'>
                    <FontAwesomeIcon icon={faCity} className='city-icon' />
                    <span id='city-name'></span>
                    <FontAwesomeIcon icon={faSun} className='city-weather' />
                    <span id='city-weather'></span>
                </p>
                <div id='date-header'>
                    <FontAwesomeIcon icon={faCalendarAlt} id='calendar' />
                    <p className='date'>{currentDay},</p>
                    <p className='date'>{monthday}</p>
                    <p className='date'>{currentMonth}</p>
                    <p className='date'>{year}</p>
                </div>
                <div id='breaking-new'>Breaking news</div>
            </div>
            <div id='clock-header'>
                <FontAwesomeIcon icon={faClock} />
                <p id='reloj'></p>
            </div>
        </div>
    )
}

export default Header;
