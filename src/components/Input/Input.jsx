import React, { useState, useContext, useRef } from "react";
import { FormularioContexto } from "../../context/ContextoFormulario";

const Input = ({ name, label, alt, type = "text" }) => {
  const [store, dispatch] = useContext(FormularioContexto);

  const [input, setInput] = useState("");

  const inputRef = useRef(null);

  const onChange = (e) => {
    setInput(inputRef.current.value);
  };

  const onBlur = (e) => {
    e.preventDefault();

    if (e.target.alt !== "pokemon") {
      dispatch({
        type: "ACTUALIZAR_ENTRENADOR",
        payload: {
          ...store?.dataInput, [e.target.name]: inputRef.current.value,
        },
      })
    } else dispatch({
      type: "ACTUALIZAR_POKEMON",
      payload: {
        ...store?.dataInput, [e.target.name]: inputRef.current.value,
      },
    });
  };

  return (
    <div className="input-contenedor">
      <label htmlFor={name}>{label}</label>
      <input
        ref={inputRef}
        type={type}
        value={input}
        id={name}
        name={name}
        alt={alt}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Input;