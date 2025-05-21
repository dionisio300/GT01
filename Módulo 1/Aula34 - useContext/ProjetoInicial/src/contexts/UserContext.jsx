import React from 'react'
import { createContext, useState } from 'react'

export const UserContext = createContext(null)

export const UserProvider = ({children}) => {

    const [user, setUser] = useState({
        nome:'João',
        email:'joao@gmail.com',
        idade:28
    })
    return (
    <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
)}



