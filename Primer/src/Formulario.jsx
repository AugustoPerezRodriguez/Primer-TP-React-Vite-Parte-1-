import { useState } from "react";
import Campo from "./Campo";
import TextArea from "./TextArea";
import "./Formulario.css";

function Formulario({ setCitas }) {
  const [cita, setCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: ""
  });

  function handleChange(e) {
    setCita({
      ...cita,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (Object.values(cita).some(val => val.trim() === "")) {
      alert("Todos los campos son obligatorios");
      return;
    }

    setCitas(prev => [...prev, cita]);

    setCita({
      mascota: "",
      propietario: "",
      fecha: "",
      hora: "",
      sintomas: ""
    });
  }

  return (
    <div className="formulario">
      <h2>Crear mi Cita</h2>

      <form onSubmit={handleSubmit}>
        <Campo
          label="Mascota"
          type="text"
          name="mascota"
          placeholder="Nombre Mascota"
          value={cita.mascota}
          onChange={handleChange}
        />

        <Campo
          label="Dueño"
          type="text"
          name="propietario"
          placeholder="Nombre dueño de la mascota"
          value={cita.propietario}
          onChange={handleChange}
        />

        <Campo
          label="Fecha"
          type="date"
          name="fecha"
          placeholder="dd/mm/aaaa"
          value={cita.fecha}
          onChange={handleChange}
        />

        <Campo
          label="hora"
          type="time"
          name="hora"
          placeholder="--:--"
          value={cita.hora}
          onChange={handleChange}
        />

        <TextArea
          label="Síntomas"
          name="sintomas"
          value={cita.sintomas}
          onChange={handleChange}
        />

        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </div>
  );
}

export default Formulario;