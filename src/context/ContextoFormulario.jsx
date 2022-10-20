import { createContext, useReducer } from "react";

export const FormularioContexto = createContext();

const initialState = {};

const formularioReducer = (state, action) => {
    switch (action.type) {
        case 'ACTUALIZAR_ENTRENADOR':
            return {
                ...state,
                dataInput: action.payload,
            };
        case 'ACTUALIZAR_POKEMON':
            return {
                ...state,
                dataInput: action.payload,
            }
        case 'SEND':
            return state = {};
        default:
            throw new Error("No se ha recibido ningún tipo de acción...");
    }
}

export const FormularioProvider = ({ children }) => {
    const [store, dispatch] = useReducer(formularioReducer, initialState);

    return (
        <FormularioContexto.Provider value={[store, dispatch]}>
            {children}
        </FormularioContexto.Provider>
    )
}