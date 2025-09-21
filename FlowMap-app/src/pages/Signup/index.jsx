import { KbProject } from "../../assets/images"
import "../Login/Login.css"

function Signup() {
  return (
    <main className="login-container">
      <form className="form-login" onSubmit={'onSubmit'}>
        <h1 className="title-login">Registre-se para continuar</h1>
        <div className="user-login">
          <label htmlFor="user">Nome de Usuário</label>
          <input placeholder="Nome de Usuário"
            id="user"
            type="text"
            name="user"
            onChange={'onChange'}
            value={''}
          />
        </div>
        <div className="user-login">
          <label htmlFor="email">E-mail</label>
          <input placeholder="Insira seu email"
            id="email"
            type="email"
            name="email"
            onChange={'onChange'}
            value={''}
          />
        </div>
        <div className="user-login">
          <label htmlFor="password">Senha</label>
          <input placeholder="Insira sua senha"
            id="password"
            type="password"
            name="password"
            onChange={'onChange'}
            value={''}
          />
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
