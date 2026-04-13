import "./Cita.css"

function Cita({ mascota, propietario, fecha, hora, sintomas, eliminar }) {
  return (
    <div className="cita">
      <p>Mascota: <span>{mascota}</span></p>
      <p>Dueño: <span>{propietario}</span></p>
      <p>Fecha: <span>{fecha}</span></p>
      <p>Hora: <span>{hora}</span></p>
      <p>Síntomas: <span>{sintomas}</span></p>

      <button onClick={eliminar} className="button eliminar">
        Eliminar ×
      </button>
    </div>
  );
}

export default Cita;