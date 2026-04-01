import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from "./Header";
import Formulario from "./Formulario";
import ListaCitas from "./ListaCitas";


function App() {
  const [citas, setCitas] = useState([
      {
        mascota: "Augustitus",
        duenio: "Felipe",
        fecha: "10/03",
        hora: "10:30",
        sintomas: "Dificultad al respirar"
      }
    ]);

    return (
      <div class="root">
        <Header />
        <div class="container"> 
          <Formulario />
          <ListaCitas citas={citas} />
        </div>
       
      </div>
    );
}

export default App