
import './App.css'

function Formulario() {
  return (
    <div class="one-half column">
      <h2>Crear cita</h2>

      <label>Nombre Mascota</label>
      <input type="text" placeholder="Nombre de la mascota" class="u-full-width"/>
      <label>Nombre Dueño</label>
      <input type="text" placeholder="Nombre del dueño"  class="u-full-width"/>
      <label>Fecha</label>
      <input type="date" class="u-full-width"/>
      <label>hora</label>
      <input type="time"  class="u-full-width"/>
      <label>Sintomas</label>
      <textarea placeholder="sinntomas"  class="u-full-width"></textarea>

      <button class="u-full-width button-primary">Agregar cita</button>
    </div>
  );
}

export default Formulario;