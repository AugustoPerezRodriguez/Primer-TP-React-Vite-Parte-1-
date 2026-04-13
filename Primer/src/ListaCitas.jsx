import Cita from "./Cita";

function ListaCitas({ citas, setCitas }) {

  function eliminarCita(index) {
    const confirmar = confirm("¿Eliminar cita?");
    if (!confirmar) return;

    const nuevas = citas.filter((_, i) => i !== index);
    setCitas(nuevas);
  }

  return (
    <>
      <h2>Administra tus citas</h2>

      {citas.length === 0 && <p>No hay citas</p>}

      {citas.map((cita, index) => (
        <Cita
          key={index}
          {...cita}
          eliminar={() => eliminarCita(index)}
        />
      ))}
    </>
  );
}

export default ListaCitas;