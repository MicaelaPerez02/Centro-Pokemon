import React, { useState, useContext, useRef } from "react";
import { FormularioContexto } from "../../context/ContextoFormulario";

const Input = ({ name, label, type = "text" }) => {
  // Aqui deberíamos acceder al estado global para poder obtener los datos
  // del formulario y una manera de actualizar los mismos.
  const [dataFormulario, setDataFormulario] = useContext(FormularioContexto);
  const [store, dispatch] = useContext(FormularioContexto);

  // También, utilizaremos un estado local para manejar el estado del input.
  const [input, setInput] = useState("");

  const inputRef = useRef(null);

  const onChange = (e) => {
    // Aquí deberíamos actualizar el estado local del input.
    setInput(inputRef.current.value);
  };

  const onBlur = (e) => {
    // Aqui deberíamos actualizar el estado global con los datos de
    // cada input.
    // TIP: Podemos utilizar el nombre de cada input para guardar
    // los datos en el estado global usando una notación de { clave: valor }
    e.preventDefault();

    setDataFormulario({
      ...dataFormulario,
      [name]: input,
    })
  };

  return (
    <div className="input-contenedor">
      <label htmlFor={name}>{label}</label>
      <input
        ref={inputRef}
        type={type}
        value={input}
        id={name}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Input;