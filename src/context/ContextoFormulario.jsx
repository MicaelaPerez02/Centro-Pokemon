// Aqui debemos crear nuestro contexto y nuestro provider.
import { createContext, useReducer, useState } from "react";

export const FormularioContexto = createContext();

const initialState = [""];

const formularioReducer = (state, action) => {
    switch (action.type) {
        case 'ACTUALIZAR_ENTRENADOR':
            return {
                ...state,
                [action.field]: action.payload,
            };
        case 'ACTUALIZAR_POKEMON':
            return {
                ...state,
                [action.field]: action.payload,
            }
        default:
            throw new Error("No se ha recibido ningún tipo de acción...");
    }
}

export const FormularioProvider = ({ children }) => {
    const [dataFormulario, setDataFormulario] = useState({});

    const [store, dispatch] = useReducer(formularioReducer, initialState);

    return (
        <FormularioContexto.Provider value={[dataFormulario, setDataFormulario]}>
            {children}
        </FormularioContexto.Provider>
    )
}