import React from "react";
import { useContext } from "react";
import { FormularioContexto } from "../../context/ContextoFormulario";

const Detalle = () => {
  const [store, dispatch] = useContext(FormularioContexto);

  const enviarSolicitud = () => {
    dispatch({ type: "SEND"});
  
    alert("Solicitud enviada :)");
  }

  return (
    <div className="detalle-formulario">
      <div className="encabezado">
        <h3>Vista Previa de la Solicitud</h3>
      </div>
      <section className="datos-cliente">
        <h4>Datos del Entrenador</h4>
        <div className="fila">
          <p>Nombre:{store?.dataInput?.nombre}</p>
          <p>Apellido:{store?.dataInput?.apellido}</p>
          <p>Email:{store?.dataInput?.email}</p>
        </div>
      </section>
      <section className="datos-cliente">
        <h4>Datos del Pokémon</h4>
        <div className="fila">
          <p>Nombre:{store?.dataInput?.nombrePokemon}</p>
          <p>Tipo:{store?.dataInput?.tipoPokemon}</p>
          <p>Altura:{store?.dataInput?.alturaPokemon}</p>
          <p>Edad:{store?.dataInput?.edadPokemon}</p>
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
