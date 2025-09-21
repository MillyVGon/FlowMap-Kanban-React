import "./Assinaturas.css"

function Assinaturas() {
  const planos = [
    {
      title: 'Plano Básico Pessoal',
      price: 'R$ 30/mês',
      benefits: [
        'Máximo de 5 quadros',
        'Sem automação de tarefas',
        'Sem notificações',
        'Sem IA de suporte',
      ]
    },
    {
      title: 'Plano Ultimate Pessoal',
      price: 'R$ 100/mês',
      benefits: [
        'Quadros ilimitados',
        'Todo recurso do Básico',
        'Automação de tarefas',
        'Notificações',
        'IA de suporte',
      ],
    },
    {
      title: 'Plano Básico Empresarial',
      price: 'R$ 1000/mês',
      benefits: [
        'Acesso para até 1000 contas',
        'Máximo de 5 quadros',
        'Sem automação de tarefas',
        'Sem notificações',
        'Sem IA de suporte',
      ],
    },
    {
      title: 'Plano Ultimate Empresarial',
      price: 'R$ 2000/mês',
      benefits: [
        'Acesso para até 1000 contas',
        'Quadros ilimitados',
        'Todo recurso do Básico',
        'Automação de tarefas',
        'Notificações',
        'IA de suporte',
      ],
    },
  ]

  return (
    <main>
      <div className="text-signature_content">
        <h1 className="title-signature_content">Escolha o Plano Ideal para Você</h1>
        <p className="description-signature_content">Encontre o plano que <span>melhor</span> se adapta às suas necessidades, com <span>benefícios</span> exclusivos para uso pessoal ou empresarial.</p>
      </div>

      <div className="cards-signature_content">
        {planos.map((plano, index) => (
          <div className="card-signature" key={index}>
            <h2>{plano.title}</h2>
            <p className="price-signature">{plano.price}</p>
            <div className="benefits-signature">
              {plano.benefits.map((beneficio, i) => (
                <p key={i}>{beneficio}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Assinaturas
