import './App.css'

function Cita({ mascota, duenio, fecha, hora, sintomas }) {
  return (
    <div className="cita">
      <p>Mascota:<span>{mascota}</span></p>
      <p>Dueño:<span>{duenio} </span></p>
      <p>Fecha:<span>{fecha}</span></p>
      <p>Hora:<span>{hora}</span></p>
      <p>Síntomas:<span>{sintomas}</span></p>
      <button class="button elimnar u-full-width">Eliminar×</button>
    </div>
  );
}

export default Cita;