import { useState } from "react";

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
    <>
      <h2>Crear mi Cita</h2>

      <form onSubmit={handleSubmit}>
        <input name="mascota" value={cita.mascota} onChange={handleChange} placeholder="Mascota" className="u-full-width" />
        <input name="propietario" value={cita.propietario} onChange={handleChange} placeholder="Dueño" className="u-full-width" />
        <input type="date" name="fecha" value={cita.fecha} onChange={handleChange} className="u-full-width" />
        <input type="time" name="hora" value={cita.hora} onChange={handleChange} className="u-full-width" />
        <textarea name="sintomas" value={cita.sintomas} onChange={handleChange} className="u-full-width" />

        <button className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </>
  );
}

export default Formulario;