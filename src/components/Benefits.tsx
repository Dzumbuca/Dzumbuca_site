import React from 'react';
import { Heart, BookOpen, Users, Target } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Heart,
      title: "Rompe com a Necessidade de Aprovação",
      description: "Aprende a valorizar-te e a tomar decisões baseadas nos teus valores e propósito, não na opinião dos outros."
    },
    {
      icon: BookOpen,
      title: "Descobre Como a Fé Te Pode Curar",
      description: "Experimenta o poder transformador da fé cristã na cura de traumas emocionais e na superação de barreiras pessoais."
    },
    {
      icon: Users,
      title: "Inspira-te com uma História Real",
      description: "Conecta-te com testemunhos autênticos de superação, maternidade, liderança e crescimento profissional."
    },
    {
      icon: Target,
      title: "Liberta-te da Escassez e do Medo",
      description: "Aplica princípios bíblicos para vencer a mentalidade de escassez e viver na abundância que Deus preparou para ti."
    }
  ];

  return (
    <section id="beneficios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Transforma a Tua Vida com o Poder do NÃO
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descobre como a coragem de dizer "não" pode abrir portas para o "sim" que Deus tem para a tua vida.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#EC8741] bg-opacity-10 rounded-full flex items-center justify-center mb-6">
                <benefit.icon className="w-8 h-8 text-[#EC8741]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;