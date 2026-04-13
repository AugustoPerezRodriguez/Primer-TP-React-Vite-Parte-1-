import { useState, useEffect } from "react";
import Formulario from "./Formulario";
import ListaCitas from "./ListaCitas";

function App() {
  const [citas, setCitas] = useState([]);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("citas")) || [];
    setCitas(data);
  }, []);

  useEffect(() => {
    localStorage.setItem("citas", JSON.stringify(citas));
  }, [citas]);

  return (
    <div className="container">
      <div className="row">
        
        <div className="one-half column">
          <Formulario setCitas={setCitas} />
        </div>

        <div className="one-half column">
          <ListaCitas citas={citas} setCitas={setCitas} />
        </div>

      </div>
    </div>
  );
}

export default App;