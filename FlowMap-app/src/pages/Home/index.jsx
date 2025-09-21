import './Home.css'
import { MainImage1, MainImage2, MainImage3, MainImage4 } from '../../assets/images'

function Home() {
  return (

    <main>
      <section className="presentation">
        <div className="presentation-container">
          <h1 className="title-presentation"> FlowMap: Simplicidade e Organização </h1>
          <p className="description-presentation">
            Planeje, acompanhe e visualize suas tarefas de forma intuitiva e eficiente.
            Mantenha-se focado e produtivo com o FlowMap, onde suas ideias se transformam em ações.
          </p>
        </div>
        <div className="img-presentation">
          <img src={MainImage1} alt='Colaboração entre Pessoas' />
        </div>
      </section>

      <section className='info'>
        <h1 className="title-info"> Organize suas tarefas e coordene processo e equipes de formas automatizada </h1>
        <p className="description-info">
          <strong> Simples,flexível e poderoso.</strong> Com apenas quadros, listas e cartões,
          obtenha uma visualização clara de quem está fazendo o que e o que precisa ser feito. Nossa ferramenta
          oferece uma maneira intuitiva de gerenciar projetos e processos, garantindo que você e sua equipe estejam
          sempre no caminho certo.
        </p>
        <img src={MainImage2} alt='Colaboração entre Pessoas' />

        <h1 className="title-info">Saiba tudo o que precisa ser feito hoje e nos próximos dias em uma única tela.</h1>
        <p className="description-info">
          Com a FlowMap, você terá mais dinamismo e produtividade no seu dia a dia de trabalho. Tenha uma
          visão mais clara e objetiva das suas tarefas, contatos, arquivos e cards, facilitando a organização
          e o acompanhamento de todas as atividades.
        </p>
        <img src={MainImage3} alt="Estrutura do método kanban" />

        <h1 className="title-info">Automatize tarefas e notificações</h1>
        <p className="description-info">
          Automatize suas tarefas e notificações com facilidade. Informe seus clientes automaticamente sobre o
          andamento do seu projeto, dispare e-mails, inicie novos fluxos de trabalho, avise os responsáveis e
          implemente diversas outras automações. Tudo isso é facilmente configurável, tornando a gestão do seu
          projeto mais eficiente e menos manual.
        </p>
        <img src={MainImage4} alt="Automatizando tarefas online" />
      </section>
    </main>

  )
}

export default Home
