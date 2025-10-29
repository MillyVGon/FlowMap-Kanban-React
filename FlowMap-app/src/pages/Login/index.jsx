import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Kanban } from "../../assets/images"
import StoreContext from '../../Store/Context'
import api from '../../services/api'
import "./Login.css"

const initialStateForms = { email: '', password: '' };
const initialStateErrors = { email: '', password: '', general: '' };

function Login() {
  const [values, setValues] = useState(initialStateForms)
  const [errors, setErrors] = useState(initialStateErrors)
  const { setToken } = useContext(StoreContext)
  const navigate = useNavigate()

  // Atualiza os valores dos campos
  const handleChange  = (e) => {
    const { value, name } = e.target

    setValues((prev) => ({ 
      ...prev, 
      [name]: value 
    }))

    setErrors((prev) => ({ 
      ...prev, 
      [name]: "", general: "" 
    }))
  }

  // Envia o formulário
  const handleSubmit  = (e) => {
    e.preventDefault()
    setErrors(initialStateErrors)
    loginUser()
  }

  // Faz login do usuário
  const loginUser = async () => {

    // Verifica o motivo do erro
    try {
      const response = await api.post('/users/login', {
        email: values.email,
        password: values.password
      })

      const tokenData  = response.data
      setToken(tokenData )
      setValues(initialStateForms)
      navigate('/')
    } catch (err) {
      if(err.response){
        const { status, data } = err.response
        const error = data.error.toLowerCase()

        if(status === 400) {
          if(error.includes('campos'))
            setErrors({ general: data.error })
          if(error.includes('senha'))
            setErrors({ password: data.error })
          
          setValues((prev) => ({ ...prev, password: '' }))
        }
        if(status === 404) {
          setErrors({ email: data.error })
          setValues(initialStateForms)
        }
      } else {
        alert("Falha na conexão com o servidor.")
      }
    }
  }

  return (
    <main className="login-container">
      <form className="form-login" onSubmit={handleSubmit }>
        <h1 className="title-login">Entre para Continuar</h1>
        
        <div className="user-login">
          <label htmlFor="email">E-mail</label>
          <input placeholder="Insira seu email"
            id="email"
            type="email"
            name="email"
            onChange={handleChange }
            value={values.email}
          />
          {errors.email && <div className="error-box on">{errors.email}</div>}
          {errors.general && !values.email && <div className="error-box on">{errors.general}</div>}
        </div>
        
        <div className="user-login">
          <label htmlFor="password">Senha</label>
          <input placeholder="Insira sua senha"
            id="password"
            type="password"
            name="password"
            onChange={handleChange }
            value={values.password}
          />
          {errors.password && <div className="error-box on">{errors.password}</div>}
          {errors.general && !values.password && <div className="error-box on">{errors.general}</div>}
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
