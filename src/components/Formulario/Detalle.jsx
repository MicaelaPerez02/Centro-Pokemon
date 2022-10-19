import React from "react";
import { useContext } from "react";
import { FormularioContexto } from "../../context/ContextoFormulario";

const Detalle = () => {
  // Aqui deberíamos obtener los datos del formulario para poder mostrarlo en
  // la vista previa.
  const [dataFormulario, setDataFormulario] = useContext(FormularioContexto);

  const enviarSolicitud = () => {
    alert("Solicitud enviada :)");
    setDataFormulario("");
  }

  return (
    <div className="detalle-formulario">
      <div className="encabezado">
        <h3>Vista Previa de la Solicitud</h3>
      </div>
      <section className="datos-cliente">
        <h4>Datos del Entrenador</h4>
        <div className="fila">
          <p>Nombre:{dataFormulario.nombre}</p>
          <p>Apellido:{dataFormulario.apellido}</p>
          <p>Email:{dataFormulario.email}</p>
        </div>
      </section>
      <section className="datos-cliente">
        <h4>Datos del Pokémon</h4>
        <div className="fila">
          <p>Nombre:{dataFormulario.nombrePokemon}</p>
        </div>
      </section>
      <button
        className="boton-enviar"
        onClick={enviarSolicitud}
      >
        Enviar Solicitud
      </button>
    </div>
  );
};

export default Detalle;
