import { useState, createContext, useEffect } from 'react'
import { getAuth } from 'firebase/auth'

const Context = createContext()

function PhotoContextProvider({ children }) {

    const [photoUrl, setPhotoUrl] = useState('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png')


    return (
        <Context.Provider value={{ photoUrl, setPhotoUrl }}>
            {children}
        </Context.Provider>
    )
}

export { PhotoContextProvider, Context }