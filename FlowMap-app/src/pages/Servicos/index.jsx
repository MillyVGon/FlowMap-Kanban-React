import { WhatKanban } from "../../assets/images"
import "./Servicos.css"

function Servicos() {
  const infos = [
    {
      title: 'Quadros Kanban',
      description: 'Visualize suas tarefas organizadas em quadros claros e intuitivos. Veja o progresso do início ao fim e mantenha sua equipe sincronizada.',
    },
    {
      title: 'Etapas Personalizáveis',
      description: 'Divida suas tarefas em listas como A Fazer, Em Progresso e Concluído – ou adapte o fluxo para atender às necessidades exclusivas do seu projeto.',
    },
    {
      title: 'Tarefas e Cartões',
      description: 'Crie cartões para tarefas e ideias. Organize todas as informações essenciais e atualize o status arrastando os cartões entre as listas.',
    },
  ]

  const cards = [
    {
      title: "Organização Visual",
      description: "Planeje e organize projetos visualmente com a facilidade de um sistema Kanban. Ideal para equipes ágeis.",
      color: "#FF735D",
      icon: "📂",
    },
    {
      title: "Brainstorming Criativo",
      description: "Centralize ideias da equipe em um só lugar e facilite a transformação de conceitos em ações.",
      color: "#4A90E2",
      icon: "💡",
    },
    {
      title: "Integração Simplificada",
      description: "Adapte-se rapidamente a novos fluxos de trabalho e equipes com ferramentas que tornam a colaboração fluida.",
      color: "#34C759",
      icon: "🍃",
    },
    {
      title: "Gerenciamento de Tarefas",
      description: "Transforme tarefas complexas em ações simples e coordenadas para alcançar os objetivos do projeto com eficiência.",
      color: "#FFC042",
      icon: "📋",
    },
  ]

  return (
    <main>
      <section className="servicos">
        <div className="text-servicos">
          <h1 className="title-servicos">Maximize sua produtividade</h1>
          <p className="description-servicos">
            <span>Simples, flexível e poderoso.</span> Tudo o que você precisa são quadros,
            listas e cartões para poder visualizar claramente quem está fazendo o quê e o que precisa ser concluído.
            Descubra como começar no nosso guia prático.
          </p>
        </div>
        
        <div className="servicos-container">
          <div>
            {infos.map((info, index) => (
              <div className="info-servicos" key={index}>
                <h2>{info.title}</h2>
                <p>{info.description}</p>
              </div>
            ))}
          </div>

          <div className="img-servicos">
            <img src={WhatKanban} alt="O que é um quadro kanban?" />
          </div>
        </div>
      </section>

      <section className="content_servicos">
        <h1 className="title-content_servicos">Fluxos de trabalho para qualquer projeto, grande ou pequeno</h1>
        <div className="card-content_servicos">
          {cards.map((card, index) => (
            <div className="card-servicos" style={{ borderTop: `8px solid ${card.color}` }} key={index}>
              <span>{card.icon}</span>
              <h2>{card.title}</h2>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Servicos
