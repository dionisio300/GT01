import React from 'react'
import { createContext, useState } from 'react'

export const UserContext = createContext(null)

export const UserProvider = ({children}) => {
    let [usuario, setUsuario] = useState('')
    let user = {
        nome:'João',
        email:'joao@gmail.com',
        idade:28
    }
    setUsuario(user)

    return (
    <UserContext.Provider value={{usuario, setUsuario}}>
        {children}
    </UserContext.Provider>
)}



