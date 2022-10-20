import React, { useState, useContext, useRef, useEffect } from "react";
import { FormularioContexto } from "../../context/ContextoFormulario";

const Input = ({ name, label, alt, isFocus, type = "text" }) => {
  const [store, dispatch] = useContext(FormularioContexto);

  const [input, setInput] = useState("");

 // const inputRef = useRef(null);

  const focusRef = useRef(null);

  useEffect(() => {
    isFocus && focusRef.current.focus();
  },[isFocus]);

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const onBlur = (e) => {
    e.preventDefault();

    if (e.target.alt !== "pokemon") {
      dispatch({
        type: "ACTUALIZAR_ENTRENADOR",
        payload: {
          ...store?.dataInput, [e.target.name]: e.target.value,
        },
      })
    } else dispatch({
      type: "ACTUALIZAR_POKEMON",
      payload: {
        ...store?.dataInput, [e.target.name]: e.target.value,
      },
    });
  };

  return (
    <div className="input-contenedor">
      <label htmlFor={name}>{label}</label>
      <input
        ref={focusRef}
        type={type}
        value={input}
        name={name}
        alt={alt}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Input;