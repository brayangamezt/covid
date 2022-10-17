import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Presentation from './components/Presentation';
import Menu from './components/Menu';
import Inicio from './components/Inicio';
import Busqueda from './components/Busqueda';
import Sintomas from './components/Sintomas';
import Tratamineto from './components/Tratamiento';
import Error from './components/Error';
import { createStore } from 'redux';

//Importando redux
import { Provider } from 'react-redux';
import reducer from './reducers/info';

const App = () => {

  const store=createStore(reducer);

  return (
    <Provider store={store} >
      <BrowserRouter>
        <Header/>
        <Presentation/>
        <Menu/>
        <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path='/busqueda' element={<Busqueda/>}/>
          <Route path='/sintomas' element={<Sintomas/>}/>
          <Route path='/tratamiento' element={<Tratamineto/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App