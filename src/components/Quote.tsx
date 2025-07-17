import React from 'react';
import { Quote as QuoteIcon } from 'lucide-react';

const Quote = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <QuoteIcon className="w-16 h-16 text-[#EC8741] mx-auto mb-8 opacity-60" />
        
        <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-800 leading-relaxed mb-8 italic">
          "Aprendi que dizer não com fé é um sim para o meu propósito."
        </blockquote>
        
        <div className="flex items-center justify-center">
          <div className="w-16 h-0.5 bg-[#EC8741] mr-4"></div>
          <cite className="text-lg font-semibold text-[#EC8741] not-italic">
            Marcelina Jaime Furtado
          </cite>
          <div className="w-16 h-0.5 bg-[#EC8741] ml-4"></div>
        </div>
      </div>
    </section>
  );
};

export default Quote;