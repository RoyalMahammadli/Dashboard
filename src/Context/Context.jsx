import { createContext, useState } from "react";
import { contentInner } from "../data/TabcontentInner";


export const ContextProvider = ({ children }) => {

    const [content, setContent] = useState(contentInner)
    const [activeTabData, setActiveTabData] = useState({})

    const obj = { content, setContent, activeTabData, setActiveTabData }
    return (
        <Context.Provider value={obj} >
            {children}
        </Context.Provider>
    )
}

const Context = createContext()
export default Context;