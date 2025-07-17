import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Este livro é adequado para qualquer mulher?",
      answer: "Sim! Independentemente da tua idade, estado civil ou situação profissional, se sentes que precisas de mais coragem para estabelecer limites e viver com propósito, este livro é para ti."
    },
    {
      question: "Preciso ser cristã para beneficiar deste livro?",
      answer: "Embora o livro seja baseado em princípios cristãos e na fé da autora, as estratégias práticas e lições de vida podem inspirar qualquer pessoa que busque crescimento pessoal e emocional."
    },
    {
      question: "Como posso aplicar os ensinamentos na minha vida?",
      answer: "O livro inclui exemplos práticos da vida real da autora e exercícios de reflexão que te ajudarão a identificar áreas onde precisas de dizer 'não' e como fazê-lo com amor e firmeza."
    },
    {
      question: "Que formato de livro está disponível?",
      answer: "O livro está disponível em formato digital (PDF e ePub) para download imediato após a compra, permitindo leitura em qualquer dispositivo."
    },
    {
      question: "Existe garantia de satisfação?",
      answer: "Sim, oferecemos uma garantia de satisfação de 30 dias. Se não ficares completamente satisfeita com o conteúdo, devolvemos o teu dinheiro sem perguntas."
    },
    {
      question: "Posso contactar a autora?",
      answer: "Sim, a Marcelina está disponível através das redes sociais e email para partilhar experiências e responder a questões sobre o livro e a jornada de transformação."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Dúvidas Frequentes
          </h2>
          <p className="text-xl text-gray-600">
            Respostas às perguntas mais comuns sobre o livro
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-[#EC8741] flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#EC8741] flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;