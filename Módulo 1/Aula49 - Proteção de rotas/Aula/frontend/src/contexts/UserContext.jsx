import React from 'react'
import { createContext, useState } from 'react'

export const UserContext = createContext(null)

export const UserProvider = ({children}) => {

    const [user, setUser] = useState(() => {
        let usuarioSalvo = localStorage.getItem('usuario')
        
        return usuarioSalvo ? JSON.parse(usuarioSalvo) : null
    })
    console.log(user)
    return (
    <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
)}



