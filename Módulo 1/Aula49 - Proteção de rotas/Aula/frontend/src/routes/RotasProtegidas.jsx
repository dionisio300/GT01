import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext'

const RotasProtegidas = ({ children }) => {
    let {user} = useContext(UserContext)
    
    return user ? children : <Navigate to= '/'/>
}

export default RotasProtegidas