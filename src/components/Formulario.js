import React, { useState } from "react";


const Formulario = ({ crearCita }) => {
  const [cita, actualizarCita] = useState({
    id: "",
    nombreCliente: "",
    tipoServicio: "",
    modo: "",
  });
  const [error, actualizarError] = useState(null);

  const actualizarState = (e) => {
    actualizarCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  //extraer valores
  const { nombreCliente, tipoServicio, modo } = cita;

  // Agregar cita formulario

  const submitCita = (e) => {
    e.preventDefault();

    //validación
    if (nombreCliente.trim() === "" || tipoServicio.trim() === "" || modo.trim() === "") {
      actualizarError(true);
      return;
    }
    //Eliminar el mensaje previo
    actualizarError(false);

    //asignar un ID
    const { v4: uuidv4 } = require("uuid");
    cita.id = uuidv4();

    //crear una cita
    crearCita(cita);

    //reiniciar el form

    actualizarCita({
      id: "",
      nombreCliente: "",
      tipoServicio: "elija un servicio",
      modo: "",
    });
  };

  return (
    <div>
      <h2>Crea una cita  </h2>

      {error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}

      <form className="contenedor-formulario" onSubmit={submitCita}>
        <label> Nombre del cliente</label>
        <input
          type="text"
          name="nombreCliente"
          className=""
          placeholder="Nombre del cliente"
          onChange={actualizarState}
          value={nombreCliente}
        ></input><br></br>

        <label>Servicios</label>
        <select name="tipoServicio" onChange={actualizarState}>
        <option  value="elegir" >
            -- Elija un servicio --
          </option>
          <option  value="actualizacion" >
            Actualización de datos
          </option>
          <option  value="expediente" >
            Crear expediente
          </option>
          <option  value="revision" >
            Revisión de expediente
          </option>
          <option  value="contrato" >
            Terminación de contrato
          </option>
        </select><br></br>

        <label>Modo de cita</label><br></br>

        
        <input
          type="radio"
          name="modo"
          className=""
          onChange={actualizarState}
          value="presencial"
        ></input> <label>    Presencial   </label> <br></br>

       

        <input
          type="radio"
          name="modo"
          className=""
          onChange={actualizarState}
          value="online"
        ></input>
         <label>   Online</label> <br></br>

        <button type="submit" className="u-full-width button-primary">
          Agregar cita
        </button>
      </form>
    </div>
  );
};

export default Formulario;
