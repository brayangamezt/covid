import React from 'react';
import {NavLink} from 'react-router-dom';
import '../assets/Scss/menu.scss';

const Menu = () => {
  return (
    <ul className='menu-principal'>
        <li className='lista-menu'><NavLink to='/' className='menu' >Inicio</NavLink></li>
        <li className='lista-menu'><NavLink to='/busqueda' className='menu' >Busqueda</NavLink></li>
        <li className='lista-menu'><NavLink to='/sintomas' className='menu' >Sintomas</NavLink></li>
        <li className='lista-menu'><NavLink to='/tratamiento' className='menu' >Tratamiento</NavLink></li>
    </ul>
  )
}

export default Menu