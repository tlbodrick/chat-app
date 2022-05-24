import { useState, createContext, useEffect } from 'react'

const Context = createContext()

function ContextProvider({ children }) {
    const [showSidebar, setShowSidebar] = useState(true)

    const onClick = e => {
        setShowSidebar(prevValue => !prevValue)
    }

    return (
        <Context.Provider value={{ showSidebar, onClick }}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }