import Campo from './Campo'
import TextArea from './TextArea'

function Formulario() {
  return (
    <>
      <h2>Crear mi Cita</h2>
      <form>
        <Campo
          label="Nombre Mascota"
          type="text"
          name="mascota"
          placeholder="Nombre Mascota"
        />
        <Campo
          label="Nombre Dueño"
          type="text"
          name="propietario"
          placeholder="Nombre dueño de la mascota"
        />
        <Campo label="Fecha" type="date" name="fecha" />
        <Campo label="hora" type="time" name="hora" />
        <TextArea label="Sintomas" name="sintomas" />
        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </>
  )
}

export default Formulario
