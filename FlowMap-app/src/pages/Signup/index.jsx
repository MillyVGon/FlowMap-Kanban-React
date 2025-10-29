import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { KbProject } from "../../assets/images"
import api from '../../services/api'
import "../Login/Login.css"

const initialStateForms = { name: '', email: '', signature: '', password: '', confirmPassword: '' }
const initialStateErrors = { email: '', password: '', general: '' };

function Signup() {
  const [values, setValues] = useState(initialStateForms)
  const [errors, setErrors] = useState(initialStateErrors)
  const [helpActive, setHelpActive] = useState(false)
  const navigate = useNavigate()

  const toggleHelp = () => {
    setHelpActive(!helpActive)
  }

  // Atualiza os valores dos campos
  const handleChange = (e) => {
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
  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors(initialStateErrors)
    createUser()
  }

  // Registra o usuário
  const createUser = async () => {
    try {
      await api.post('/users/register', {
        name: values.name,
        email: values.email,
        signature: values.signature,
        password: values.password,
        confirmPassword: values.confirmPassword
      })

      setValues(initialStateForms)
      navigate('/Entrar')
    } catch (err) {
      
      // Verifica o motivo do erro
      if(err.response) {
        const { status, data } = err.response
        const error = data.error.toLowerCase()

        if(status === 400) {
          if(error.includes('campos'))
            setErrors({ general: data.error })
          if(error.includes('senha')) 
            setErrors({ password: data.error })
          if(error.includes('senhas'))
            setErrors({ password: data.error })

          setValues((prev) => ({ ...prev, password: '', confirmPassword: '' }))
        }
        if(status === 409) {
          setErrors({ email: data.error })   
          setValues((prev) => ({ ...prev, email: '', password: '', confirmPassword: '' }))         
        }
      } else {
        alert("Falha na conexão com o servidor.")
      }
    }
  }

  return (
    <main className="login-container">
      <form className="form-login" onSubmit={handleSubmit}>
        <h1 className="title-login">Registre-se para continuar</h1>

        <div className="user-login">
          <label htmlFor="user">Nome de Usuário</label>
          <input placeholder="Nome de Usuário"
            id="name"
            type="text"
            name="name"
            onChange={handleChange}
            value={values.name}
          />
          {errors.general && !values.name && <div className="error-box on">{errors.general}</div>}
        </div>

        <div className="user-login">
          <label htmlFor="email">E-mail</label>
          <input placeholder="Insira seu email"
            id="email"
            type="email"
            name="email"
            onChange={handleChange}
            value={values.email}
          />
          {errors.email && <div className="error-box on">{errors.email}</div>}
          {errors.general && !values.email && <div className="error-box on">{errors.general}</div>}
        </div>

        <div className="user-login">
          <label htmlFor="signature">
            ID Assinatura
            <div className="help-wrapper">
              <span className="help-icon" onClick={toggleHelp} aria-label="Abrir explicação do ID Assinatura">?</span>
              <div className="help-box">Como o site é apenas um projeto fictício, qualquer valor é aceito nessa parte.</div>
            </div>
          </label>
          <input placeholder="Insira o Id da Assinatura"
            id="signature"
            type="text"
            name="signature"
            onChange={handleChange}
            value={values.signature}
          />
          {errors.general && !values.signature && <div className="error-box on">{errors.general}</div>}
        </div>

        <div className="user-login">
          <label htmlFor="password">Senha</label>
          <input placeholder="Insira sua senha"
            id="password"
            type="password"
            name="password"
            onChange={handleChange}
            value={values.password}
          />
          {errors.password && <div className="error-box on">{errors.password}</div>}
          {errors.general && !values.password && <div className="error-box on">{errors.general}</div>}
        </div>

        <div className="user-login">
          <label htmlFor="password">Confirmar Senha</label>
          <input placeholder="Confirme sua Senha"
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            onChange={handleChange}
            value={values.confirmPassword}
          />
          {errors.password && <div className="error-box on">{errors.password}</div>}
          {errors.general && !values.confirmPassword && <div className="error-box on">{errors.general}</div>}
        </div>

        <button className="button-login" type="submit">Cadastrar</button>
      </form>

      <div className="content-login">
        <h1>Bem-vindo <br /> Embarque em uma nova jornada</h1>
        <img src={KbProject} alt="Entre para acessar suas tarefas" />
      </div>
    </main>
  )
}

export default Signup
