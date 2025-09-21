import { useContext, useEffect, useState, useRef } from 'react'
import { Link } from "react-router-dom"
import StoreContext from '../../Store/Context'
import { Logo } from '../../assets/images'

import './Header.css'

function NavBar() {
  const { token, setToken } = useContext(StoreContext)
  const [menuActive, setMenuActive] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  }

  const onSubmit = () => {
    setToken(false)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && !event.target.closest(".menu-btn")) {
        setMenuActive(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [])

  return (
    <header>
      <nav className='navbar'>
        <Link to="/" className="nav-logo">
          <img src={Logo} alt='Logo do FlowMap'/> FlowMap
        </Link>

        <button className={`menu-btn ${menuActive ? "on" : ""}`} onClick={toggleMenu} aria-label="Abrir menu de navegação">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div ref={menuRef} className={`nav-menu ${menuActive ? "on" : ""}`}>
          <ul className="nav-links">
            <Link to="/" onClick={() => setMenuActive(false)}> Inicio </Link>
            <Link to="/Servicos" onClick={() => setMenuActive(false)}> Serviços </Link>
            {token && (
              <Link to="/Kanban" onClick={() => setMenuActive(false)}>Kanban</Link>
            )}
            {!token && (
              <Link to="/Assinaturas" onClick={() => setMenuActive(false)}>Assinaturas</Link>
            )}
            <Link to="/Sobre" onClick={() => setMenuActive(false)}> Sobre Nós</Link>
          </ul>

          <ul className="nav-actions">
            {!token && (
              <Link to="/Entrar" className="btn btn-login" onClick={() => setMenuActive(false)}> Entrar </Link>
            )}
            {!token && (
              <Link to="/Criar-Conta" className="btn btn-signup" onClick={() => setMenuActive(false)}> Criar Conta </Link>
            )}
            {token && (
              <Link to="/Entrar" className="btn btn-login" onClick={() => {onSubmit(); setMenuActive(false)}}> Sair </Link>
            )}
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default NavBar
