// Aqui debemos crear nuestro contexto y nuestro provider.
import { createContext, useState } from "react";

export const FormularioContexto = createContext();

export const FormularioProvider = ({ children }) => {
    const [dataFormulario, setDataFormulario] = useState({});

    return (
        <FormularioContexto.Provider value={[dataFormulario, setDataFormulario]}>
            {children}
        </FormularioContexto.Provider>
    )
}