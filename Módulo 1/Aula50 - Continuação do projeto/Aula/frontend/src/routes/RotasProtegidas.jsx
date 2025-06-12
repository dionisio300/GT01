import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext'

const RotasProtegidas = ({ children, tipoPermitido }) => {
    let {user} = useContext(UserContext)

    if (!user){
        return <Navigate to= '/'/>
    }
    if(user.tipo != tipoPermitido){
        return <Navigate to= '/'/>
    }
    return children
}

export default RotasProtegidas