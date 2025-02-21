import { useState } from 'react'
import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { MostrarHome } from './paginas/Home'
import { MostrarAbout } from './paginas/About'
import { MostrarContacto } from './paginas/Contacto'
import { Error } from './paginas/ErrorRutas'
import { Enlaces } from './paginas/Navegacion'
import { BuscarUsuario } from './paginas/Busqueda'
import { MostrarAdmin } from './paginas/Admin'

function App() {
  const [autorizado, setAutorizado] = useState(false)

  return (
    <>
      <BrowserRouter>
        <Enlaces/>

        {/** Envuelve las rutas */}
        <Routes>
          {/** Cada ruta renderiza un componente */}
          <Route path='/' element={<MostrarHome/>}></Route>
          <Route path='/about' element={<MostrarAbout/>}></Route>
          <Route path='/contacto' element={<MostrarContacto/>}></Route>
          <Route path='/user/:id' element={<BuscarUsuario/>}></Route>
          <Route path='/admin' element={ autorizado ? <MostrarAdmin/> : <Navigate to='/'/> }></Route>

          <Route path='*' element={<Error/>}></Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
