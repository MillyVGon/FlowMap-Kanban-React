import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import StoreContext from '../../Store/Context'

import { Kanban } from "../../assets/images"
import "./Login.css"

function initialState() {
  return { email: '', password: '' }
}

function Login() {
  const [values, setValues] = useState(initialState)
  const { setToken } = useContext(StoreContext)
  const navigate = useNavigate()

  const onChange = (e) => {
    const { value, name } = e.target

    setValues({
      ...values,
      [name]: value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const token = true

    if (token) {
      setToken(token)
      return navigate('/Kanban')
    }

    setValues(initialState)
  }

  return (
    <main className="login-container">
      <form className="form-login" onSubmit={onSubmit}>
        <h1 className="title-login">Entre para Continuar</h1>
        <div className="user-login">
          <label htmlFor="email">E-mail</label>
          <input placeholder="Insira seu email"
            id="email"
            type="email"
            name="email"
            onChange={onChange}
            value={values.email}
          />
        </div>
        <div className="user-login">
          <label htmlFor="password">Senha</label>
          <input placeholder="Insira sua senha"
            id="password"
            type="password"
            name="password"
            onChange={onChange}
            value={values.password}
          />
        </div>
        <button className="button-login" type="submit">Entrar</button>
      </form>

      <div className="content-login">
        <h1>Bem-vindo de volta <br /> Entre para acessar suas tarefas</h1>
        <img src={Kanban} alt="Entre para acessar suas tarefas" />
      </div>
    </main>
  )
}

export default Login
