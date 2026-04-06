import './App.css'
import Header from './Header'
import Formulario from './Formulario'
import ListaCitas from './ListaCitas'
import { useState } from 'react'

function App() {
  const [citas] = useState([
    {
      mascota: 'Pipe',
      duenio: 'Augusto',
      fecha: '2021-08-05',
      hora: '08:20',
      sintomas: 'Le duele la pierna',
    },
    {
      mascota: 'Sifon',
      duenio: 'Flecha',
      fecha: '2023-08-05',
      hora: '09:24',
      sintomas: 'Duerme mucho',
    },
    {
      mascota: 'Floki',
      duenio: 'Ari',
      fecha: '2023-08-05',
      hora: '16:15',
      sintomas: 'No está comiendo',
    },
  ])

  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario />
          </div>
          <div className="one-half column">
            <ListaCitas citas={citas} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
