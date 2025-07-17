import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Santos",
      role: "Empresária",
      content: "A história da Marcelina tocou-me profundamente. Finalmente compreendi que dizer 'não' não é egoísmo, é amor próprio e fidelidade ao meu propósito. Este livro mudou a minha vida profissional e pessoal.",
      rating: 5
    },
    {
      name: "Pedro Oliveira",
      role: "Pastor",
      content: "Como líder cristão, recomendo este livro a todas as mulheres da nossa congregação. A Marcelina mostra como a fé pode ser a base para decisões corajosas e transformação real.",
      rating: 5
    },
    {
      name: "Ana Costa",
      role: "Mãe e Profissional",
      content: "Como mãe, sempre me senti culpada por estabelecer limites. Este livro ensinou-me que posso ser uma mãe amorosa e ainda assim dizer 'não' quando necessário. Libertador!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Histórias de Transformação Real
          </h2>
          <p className="text-xl text-gray-600">
            Mulheres que descobriram o poder libertador do "não"
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm border-2 border-gray-100 hover:border-[#EC8741] hover:border-opacity-30 transition-all duration-300">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#EC8741] fill-current" />
                ))}
              </div>
              
              <Quote className="w-8 h-8 text-[#EC8741] opacity-30 mb-4" />
              
              <p className="text-gray-600 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-[#EC8741] text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;