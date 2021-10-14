import React from "react";

const Formulario = ({ presupuesto, setPresupuesto }) => {
  const handleChange = (e) => {
    setPresupuesto({
      ...presupuesto,
      [e.target.name]: e.target.value,
    });
  };

  let { concepto, monto, fecha, tipo } = presupuesto;

  const handleSubmit = () => {
    //validación de los datos
    if (concepto === "" || monto === "" || fecha === "" || tipo === "") {
      alert("Todos los campos son obligatorios");
      return;
    }

    //consulta
    const requestInit = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(presupuesto),
    };
    fetch("http://localhost:9000/api", requestInit)
      .then((res) => res.text())
      .then((res) => console.log(res));

    //reiniciando state de libro
    setPresupuesto({
      concepto: "",
      monto: 0,
      fecha: "",
      tipo: "",
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="concepto" className="form-label">
          Concepto
        </label>
        <input
          value={concepto}
          name="concepto"
          onChange={handleChange}
          type="text"
          id="concepto"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="monto" className="form-label">
          Monto
        </label>
        <input
          value={monto}
          name="monto"
          onChange={handleChange}
          type="number"
          id="monto"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="fecha" className="form-label">
          Fecha
        </label>
        <input
          value={fecha}
          name="fecha"
          onChange={handleChange}
          type="date"
          id="fecha"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tipo" className="form-label">
          Tipo
        </label>
        <input
          value={tipo}
          name="tipo"
          onChange={handleChange}
          type="text"
          id="tipo"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary">Registrar</button>
    </form>
  );
};

export default Formulario;
