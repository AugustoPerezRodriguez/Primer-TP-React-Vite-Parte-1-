import Cita from "./Cita";
import "./ListaCitas.css";

function ListaCitas({ citas, setCitas }) {

  function eliminarCita(index) {
    const confirmar = confirm("¿Eliminar cita?");
    if (!confirmar) return;

    const nuevas = citas.filter((_, i) => i !== index);
    setCitas(nuevas);
  }

  return (
    <div className="lista-citas">
      <h2>Administra tus citas</h2>

      {citas.length === 0 && <p style={{ color: "white", textAlign: "center" }}>No hay citas</p>}

      {citas.map((cita, index) => (
        <Cita
          key={index}
          mascota={cita.mascota}
          propietario={cita.propietario}
          fecha={cita.fecha}
          hora={cita.hora}
          sintomas={cita.sintomas}
          eliminar={() => eliminarCita(index)}
        />
      ))}
    </div>
  );
}

export default ListaCitas;