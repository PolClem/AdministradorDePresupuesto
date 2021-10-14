import React, { Fragment, useState, useEffect } from "react";
import Navbar from "./Components/NavBar.js";
import Presupuestos from "./Components/Presupuestos.js";
import Formulario from "./Components/Formulario.js";

function App() {
  const [presupuesto, setPresupuesto] = useState({
    concepto: "",
    monto: 0,
    fecha: "",
    tipo: "",
  });

  const [presupuestos, setPresupuestos] = useState([]);

  const [actualizaLista, setActualizaLista] = useState(false);

  useEffect(() => {
    const getPresupuestos = () => {
      fetch("http://localhost:9000/api")
        .then((res) => res.json())
        .then((res) => setPresupuestos(res));
    };
    getPresupuestos();
    setActualizaLista(false);
  }, [actualizaLista]);

  return (
    <Fragment>
      <Navbar brand="Administrador de presupuestos" />
      <div className="container">
        <div className="row">
          <div className="col-7">
            <h2 style={{ textAlign: "center" }}>Lista de Ingresos/Egresos</h2>
            <Presupuestos
              presupuesto={presupuesto}
              setPresupuesto={setPresupuesto}
              presupuestos={presupuestos}
              setActualizaLista={setActualizaLista}
            />
          </div>
          <div className="col-5">
            <h2 style={{ textAlign: "center" }}>Agrega un presupuesto</h2>
            <Formulario
              presupuesto={presupuesto}
              setPresupuesto={setPresupuesto}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
