import { createContext, useState } from "react";
import { contentInner } from "../data/TabcontentInner";


const [content, setContent] = useState(contentInner)
export const ContextProvider = ({ children }) => {

    const obj = { content, setContent }
    return (
        <Context.Provider value={obj} >
            {children}
        </Context.Provider>
    )
}

const Context = createContext()
export default Context;