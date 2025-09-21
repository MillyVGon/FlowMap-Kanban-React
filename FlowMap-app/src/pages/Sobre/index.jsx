import { FlowMap } from "../../assets/images"
import "./Sobre.css"

function Home() {
  return (
    <main>
      <section className="sobre">
        <div className="sobre-container">
          <h1 className="title-sobre">Quem Somos</h1>
          <p className="description-sobre">
            A <span>FlowMap</span> é uma plataforma inovadora dedicada a ajudar indivíduos e empresas no gerenciar
            de suas tarefas e projetos de forma eficiente. Tendo uma interface intuitiva e com vários recursos avançados,
            nosso objetivo é facilitar a organização e aumentar a produtividade, permitindo um melhor acompanhamento
            de atividades, prazos e prioridades, otimizando o fluxo de trabalho para garantir resultados mais rápidos e eficazes.
          </p>
        </div>

        <div className="img-sobre">
          <img src={FlowMap} alt="FlowMap Kanban" />
        </div>
      </section>

      <section className="mission">
        <h1 className="title-mission">Nossa Missão</h1>
        <div className="mission-container">
          <p className="description-mission">
            Durante nossa trajetória acadêmica, a organização sempre exerceu um papel essencial para garantir não apenas o sucesso, 
            mas também a eficiência no desenvolvimento das atividades diárias. A definição de prioridades, o acompanhamento das tarefas 
            e a boa administração do tempo contribuem diretamente para melhores resultados e para uma rotina de estudos mais equilibrada.
          </p>
          <p className="description-mission">
            Com essa perspectiva, buscamos recriar algumas funcionalidades inspiradas no método Kanban, reconhecido como uma das ferramentas 
            mais eficazes de gerenciamento. O objetivo principal foi desenvolver uma forma prática e acessível de organizar as demandas, 
            permitindo que cada atividade pudesse ser visualizada de modo claro e acompanhada desde sua criação até a sua conclusão.
          </p>
          <p className="description-mission">
            Esse sistema possibilita benefícios importantes, como o monitoramento constante do progresso, a otimização do fluxo de trabalho 
            e um maior controle sobre prazos e prioridades. Dessa forma, torna-se possível evitar sobrecargas, manter o foco nas etapas mais relevantes 
            e garantir um ambiente de maior segurança e tranquilidade para executar todas as atividades propostas.
          </p>
          <p className="description-mission">
            Ao aplicar um sistema baseado no Kanban no contexto acadêmico, fortalecemos habilidades essenciais para a vida estudantil, como disciplina, 
            organização e gestão do tempo. Essas competências, além de contribuírem para o êxito nos estudos, também se tornam diferenciais valiosos 
            que impactam de maneira positiva a vida profissional e pessoal.
          </p>
        </div>
      </section>
    </main>
  )
}

export default Home
