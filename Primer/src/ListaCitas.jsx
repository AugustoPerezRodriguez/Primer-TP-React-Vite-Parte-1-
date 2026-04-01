import Cita from "./Cita";
import "./App.css";

function ListaCitas({ citas }) {
  return (
    <div class="one-half column">
      <h2>Administra tus citas</h2>
      <div class="cita">
        {citas.map((cita, index) => (
        <Cita key={index} {...cita} />
      ))}
      </div> 
      

      
    </div>
  );
}

export default ListaCitas;
