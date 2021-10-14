import React from "react";

const presupuestos = ({
  presupuesto,
  setPresupuesto,
  presupuestos,
  setActualizaLista,
}) => {
  const handleDelete = (id) => {
    const requestInit = {
      method: "DELETE",
    };
    fetch("http://localhost:9000/api/" + id, requestInit)
      .then((res) => res.text())
      .then((res) => console.log(res));

    setActualizaLista(true);
  };

  let { concepto, monto, fecha, tipo } = presupuesto;
  const handleUpdate = (id) => {
    //validación de los datos
    if (concepto === "" || monto === "" || fecha === "" || tipo === "") {
      alert("Todos los campos son obligatorios");
      return;
    }
    const requestInit = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(presupuesto),
    };
    fetch("http://localhost:9000/api/" + id, requestInit)
      .then((res) => res.text())
      .then((res) => console.log(res));

    //reiniciando state de libro
    setPresupuesto({
      concepto: "",
      monto: 0,
      fecha: "",
      tipo: "",
    });

    setActualizaLista(true);
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Concepto</th>
          <th>Monto</th>
          <th>Fecha</th>
          <th>Tipo</th>
        </tr>
      </thead>
      <tbody>
        {presupuestos.map((presupuesto) => (
          <tr key={presupuesto.id}>
            <td>{presupuesto.id}</td>
            <td>{presupuesto.concepto}</td>
            <td>{presupuesto.monto}</td>
            <td>{presupuesto.fecha}</td>
            <td>{presupuesto.tipo}</td>
            <td>
              <div className="mb-3">
                <button
                  onClick={() => handleDelete(presupuesto.id)}
                  className="btn btn-danger"
                >
                  Eliminar
                </button>
              </div>
              <div className="mb-3">
                <button
                  onClick={() => handleUpdate(presupuesto.id)}
                  className="btn btn-dark"
                >
                  Modificar
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default presupuestos;
