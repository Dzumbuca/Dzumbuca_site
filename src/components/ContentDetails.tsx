import React from 'react';
import { CheckCircle } from 'lucide-react';

const ContentDetails = () => {
  const learnings = [
    "Como identificar e quebrar padrões de comportamento que te limitam",
    "Estratégias práticas para superar traumas emocionais com base na fé",
    "O poder da oração e da confiança em Deus nos momentos de decisão",
    "Como equilibrar maternidade, carreira e propósito espiritual",
    "Técnicas para desenvolver autoestima saudável baseada em princípios bíblicos",
    "Como transformar o medo em coragem através da fé",
    "Passos práticos para descobrir e viver o teu chamado divino",
    "Como usar o 'não' como ferramenta de libertação e crescimento"
  ];

  return (
    <section id="conteudo" className="py-20 bg-[#EC8741]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            O Que Vais Descobrir
          </h2>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto">
            Ferramentas práticas e inspiração espiritual para uma vida de liberdade e propósito
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {learnings.map((learning, index) => (
            <div key={index} className="flex items-start space-x-4 bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
              <div className="flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <p className="text-white text-lg leading-relaxed">{learning}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-white text-[#EC8741] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Quero desbloquear o poder do NÃO
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContentDetails;