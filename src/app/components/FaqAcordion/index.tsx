"use client";
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const SectionFaq: React.FC = () => {
  const faqs = [
    {
      title: "O Retiro serve para quem não tem produto?",
      text: (
        <div>
          <p>Não apenas serve, como é indicado. Vamos passar pela concepção
            de um produto atrativo, do zero. Se você ainda não tem produto,
            vai começar do jeito certo para já sair vendendo</p>
        </div>
      ),
    },
    {
      title:
        "Quando e onde o Retiro vai acontecer?",
      text: (
        <div>
          A próxima edição do Retiro VTSD Presencial vai acontecer nos
          dias 24 e 25 de Abril de 2025, em Brasília - DF. Assim que
          você reservar seu lugar, entraremos em contato para explicar os
          próximos passos.
        </div>
      ),
    },
    {
      title:
        "Quem dará as orientações durante o processo?",
      text: (
        <div>
          Eu e meus sócios – Ruy e Vitor – vamos te orientar durante todo
          o processo. Além disso, a maioria do meu time estará no Retiro,
          são pessoas que participam ativamente de campanhas que
          literalmente geram milhões de reais para te orientar.
        </div>
      ),
    },
    {
      title: "Devo ser aluno do VTSD para participar do Retiro?",
      text: (
        <div>
          No Retiro vamos criar as ações no AppBumper, o aplicativo
          exclusivo para alunos. Até vamos fornecer um acesso gratuito ao
          app caso você não tenha, mas recomendamos que se torne aluno
          para melhor prática do método (inclusive para consultar depois).
        </div>
      ),
    },
    {
      title:
        "Qual o preço do Retiro?",
      text: (
        <div>
          A última edição do Retiro VTSD Presencial foi vendida por R$
          7.000. Essa edição custará R$ 7.500. Minha meta é aumentar o
          valor para 10 mil reais em breve – e acredite, isso não é uma
          copyzinha só para ancorar o preço.
        </div>
      ),
    },
    {
      title:
        "Posso fazer o Retiro com meu sócio?",
      text: (
        <div>
          É comum as pessoas empreenderem com um sócio. Se esse for o seu
          caso, ao invés de ter que pagar o valor inteiro do Retiro para
          levar uma pessoa com você, você pagará o adicional de R$ 4.000.
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