import { createContext } from "react";


export const ContextProvider = ({ children }) => {

    const obj = {}
    return (
        <Context.Provider value={obj} >
            {children}
        </Context.Provider>
    )
}

const Context = createContext()
export default Context;