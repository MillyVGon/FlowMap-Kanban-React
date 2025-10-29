import { useContext, useState, useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import StoreContext from '../../Store/Context'
import api from '../../services/api'
import './Private.css'

const RoutesPrivate = () => {
  const { token } = useContext(StoreContext)
  const [isAuth, setIsAuth] = useState(null)

  useEffect(() => {
    const verifyToken = async () => {
      // Verifica se possui um valor em token
      if (!token) {
        setIsAuth(false)
        return
      }
      
      // Verifica se o token é válido
      try {
        await api.get(`/users/${token.user.id}`, {
          headers: { Authorization: `Bearer ${token.token}` },
        })

        setIsAuth(true)
      } catch (err) {
        alert("Token inválido ou expirado:")
        setIsAuth(false)
      }
    }

    verifyToken()
  }, [token])

  // Mensagem enquanto estiver verificando o token
  if (isAuth === null){
    return (
      <div className="loader-container">
        <div className="spinner"></div>
        <p>Verificando autenticação...</p>
      </div>
    )
  }

  // Se não estiver autenticado, redireciona para a página de login
  if (!isAuth) return <Navigate to="/Entrar" />

  return <Outlet />
};

export default RoutesPrivate;
