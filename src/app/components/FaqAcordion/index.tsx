"use client";
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const SectionFaq: React.FC = () => {
  const faqs = [
    {
      title: "O Retiro serve para quem não tem produto?",
      text: (
        <div>
          <p>Todo o processo de criação é feito com a ajuda do aplicativo de implementação do VTSD: o Appbumper. Você vai criar o produto, os anúncios, as páginas e todo o seu processo de marketing em um só lugar. É impossível ficar perdido e sem entender qual é o próximo passo.</p>
          <p>É praticamente preencher os formulários.</p>
        </div>
      ),
    },
    {
      title:
        "Quando e onde o Retiro vai acontecer?",
      text: (
        <div>
          O Stories 10x é o remédio para reengajar um perfil. Porque quando você
          faz o uso da técnica, você volta a aparecer para todo mundo que não
          interagia com você há tempos.
          <br />
          <br />
          Sabe aquela fileira de Stories? Você vai voltar a ficar entre os
          primeiros dela. É como se o Instagram pensasse “Opa! Tá tendo mais
          interação aqui, vou mostrar para mais pessoas”.
          <br />
          <br />
          E o melhor é que você não vai aparecer para essas pessoas com o
          conteúdo de antigamente. Você vai aparecer com a sua nova versão de
          fazer conteúdos: a sua versão dos Stories 10x.
          <br />
          <br />
          Então, não. Você não precisa criar um perfil novo, com os Stories 10x
          você pode simplesmente começar um trabalho de reengajamento.
          <br />
          <br />
          Em que caso eu recomendo a criação de um perfil novo?
          <br />
          <br />
          Apenas se você pretende trocar de nicho. Por exemplo, se você falava
          de astrologia e agora vai começar a falar de veterinária. Nesses casos
          extremos, o ideal é criar um perfil novo.
          <br />
          <br />
          Agora, se o problema é só falta de engajamento, o Stories 10x consegue
          reengajar seu Instagram. Ele realmente tem esse poder.
        </div>
      ),
    },
    {
      title:
        "Quem dará as orientações durante o processo?",
      text: (
        <div>
          Quando você entrar nos Stories 10x, você vai ver que nós temos uma
          estrutura em que você não precisa criar stories todos os dias.
          <br />
          <br />
          Agora, quando você aplicar a técnica e ver o quanto ela é viciante e
          envolvente, tanto para você quanto pros seus seguidores. Você não vai
          querer sair do Instagram. Porque seu conteúdo vai ter muito retorno e
          feedback da comunidade.
          <br />
          <br />
          O próprio Tio Huli, um dos nossos alunos, reclamava que parecia que
          ele falava sozinho. Mas agora, com os Stories 10x, ele passa muito
          mais tempo no Instagram, porém é um tempo muito melhor, porque é mais
          gostoso, é mais produtivo.
          <br />
          <br />
          O que estressa e deixa você mau, não é criar o conteúdo, é quando você
          fica criando exaustivamente e não tem resposta. O que frustra a pessoa
          não é o trabalho, é o trabalho sem retorno. E os Stories 10x é
          trabalho com retorno.
          <br />
          <br />
          Mas não tem jeito, você vai precisar se dedicar um certo tempo para
          criar esse retorno. Só que você não vai ter que ter tanta ideia, que é
          uma das coisas que mais cansa.
          <br />
          <br />
          Eu, por exemplo, antes de utilizar o Stories 10x, me esgotava muito
          fácil porque eu ficava sem saber o que falar, eu acreditava que já
          tinha falado de tudo que eu poderia.
          <br />
          <br />
          Mas com os Stories 10x esse sentimento de ficar sem conteúdo acaba.
          Porque quem vai te dar as ideias é a sua própria audiência... E a
          capacidade de geração de ideias da sua audiência é infinita.
        </div>
      ),
    },
    {
      title: "Devo ser aluno do VTSD para participar do Retiro?",
      text: (
        <div>
          O fato de você ainda não ter produto é um dos principais motivos que
          faz o Stories 10x ser tão interessante para você. O porquê disso está
          em um dos dispositivos que nós desenvolvemos: o BI apurado.
          <br />
          <br />
          Esse dispositivo funciona como um serviço de inteligência que pode ser
          utilizado para você descobrir qual tipo de produto seria o mais
          interessante para sua audiência, e qual é o melhor jeito de abordar
          esse produto quando você for vender.
          <br />
          <br />
          Então, quando você for utilizar o Stories 10x, mesmo sem produto, além
          de aumentar o crescimento orgânico do seu perfil, você ainda começa a
          ter insights de criação de um produto mais assertivo.
          <br />
          <br />
          Porque você vai estar mais próximo das pessoas que vão comprar. Quando
          você cria conteúdo sem os Stories 10x você tem uma ideia da realidade,
          que na maioria das vezes está errada, porque não é baseada em fatos.
          <br />
          <br />
          Com os Stories 10x você vai ter fatos, você vai descobrir coisas que
          as pessoas realmente pensam e querem, informações que você nunca
          saberia coletando de um jeito normal.
        </div>
      ),
    },
    {
      title:
        "Qual o preço do Retiro?",
      text: (
        <div>
          Um dos problemas de ser grande no seu nicho, é que você perde o
          elemento de proximidade com as pessoas. Afinal, quando você fica
          maior, você deixa de ser igual às pessoas da comunidade que você
          criou.
          <br />
          <br />
          E é aí que entra a sua vantagem por ainda ser menor. Porque quando
          você utiliza os Stories 10x, é como se você estivesse em um evento de
          alguém grande, e lá você criasse uma relação de amizade com algumas
          pessoas. Os Stories 10x é isso para quem é pequeno.
          <br />
          <br />
          É como se os Stories 10x fosse uma máquina de dar voz para quem é
          anônimo. E como todo mundo adora ganhar voz, você vira o líder desses
          anônimos.
          <br />
          <br />
          Então ser pequeno acaba sendo uma vantagem, porque você já está mais
          próximo da realidade do seu seguidor. O resultado é que ao longo do
          tempo você vai crescendo, porque as pessoas vão vendo que a sua
          comunidade é interessante.
          <br />
          <br />
          Quando você chegar nesse ponto, você vai ver que seus problemas vão
          ser de gente grande. Eu, por exemplo, mal consigo lidar com a
          quantidade de inbox que eu recebo, o que é bom, porque aí eu posso
          fazer um processo de curadoria para achar o ouro.
        </div>
      ),
    },
    {
      title:
        "Posso fazer o Retiro com meu sócio?",
      text: (
        <div>
          Eu mesmo não gosto de expor meu dia a dia. 90% do meu conteúdo é
          conversa com a comunidade, eu só vou surfando junto com eles,
          demonstrando meus valores, e às vezes, explicando alguma coisa que
          eles não estão vendo.
          <br />
          <br />
          Se você quiser, você não precisa nem mostrar sua cara. Inclusive, eu
          já testei e funciona melhor em texto do que em vídeo. Porque as
          pessoas param para ler o que você escreveu, e se for um vídeo elas nem
          clicam e veem no automático.
          <br />
          <br />
          Como o algoritmo do Instagram premia a interação do usuário, o
          resultado é que ele vai entregar ainda mais o seu conteúdo.
          <br />
          <br />
          Então, o fato de você não querer expor seu dia, mostrando prato de
          comida, viagem, academia, caminhada, não atrapalha você na hora de
          colocar os Stories 10x em prática.
          <br />
          <br />E claro que não tem problema nenhum em expor o dia a dia, quando
          eu viajo eu mostro bem, e nós até criamos a sequência de cobertura
          para você fazer isso com mais retorno.
        </div>
      ),
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full lg:mt-12 mt-6 text-[#FCFCFC]">
      <div className="flex flex-col">
        {faqs.map((faq, index) => (
          <div
            key={index}
            onClick={() => toggleAccordion(index)}
            className={`cursor-pointer rounded-2xl mt-2 bg-[#151E21] border border-[#354044] lg:text-[1rem] text-[.875rem]`}
          >
            <div className="flex justify-between items-center py-4 lg:px-[1.5rem] px-[1rem] text-left font-semibold">
              <p>{faq.title}</p>
              <span
                className={`lg:block hidden transition-transform ${activeIndex === index ? "rotate-180" : ""
                  }`}
              >
                <ChevronDown />
              </span>
              <span
                className={`lg:hidden transition-transform ${activeIndex === index ? "rotate-180" : ""
                  }`}
              >
                <ChevronDown size={18} />
              </span>
            </div>
            {activeIndex === index && (
              <div className="bg-[#354044] rounded-b-lg p-[20px]">
                {faq.text}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionFaq;