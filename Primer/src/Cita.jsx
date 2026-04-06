import './Cita.css'

function Cita({ mascota, duenio, fecha, hora, sintomas }) {
  return (
    <div className="cita">
      <p>
        Mascota: <span>{mascota}</span>
      </p>
      <p>
        Dueño: <span>{duenio}</span>
      </p>
      <p>
        Fecha: <span>{fecha}</span>
      </p>
      <p>
        Hora: <span>{hora}</span>
      </p>
      <p>
        Sintomas: <span>{sintomas}</span>
      </p>
      <button type="button" className="button eliminar u-full-width">
        Eliminar ×
      </button>
    </div>
  )
}

export default Cita
