import Cita from './Cita'
import './ListaCitas.css'

function ListaCitas({ citas }) {
  return (
    <section className="lista-citas">
      <h2>Administra tus citas</h2>
      {citas.map((cita, index) => (
        <Cita key={index} {...cita} />
      ))}
    </section>
  )
}

export default ListaCitas
