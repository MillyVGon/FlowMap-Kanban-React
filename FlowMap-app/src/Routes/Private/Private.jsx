import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import StoreContext from '../../Store/Context'

const RoutesPrivate = () => {
    const { token } = useContext(StoreContext)
    
    if (!token) {
        return <Navigate to="/Entrar" />;
    }
    return <Outlet />;
}

export default RoutesPrivate