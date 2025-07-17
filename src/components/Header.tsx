import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">O Poder Infinito do Não</h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-[#EC8741] transition-colors">Início</a>
            <a href="#beneficios" className="text-gray-700 hover:text-[#EC8741] transition-colors">Benefícios</a>
            <a href="#conteudo" className="text-gray-700 hover:text-[#EC8741] transition-colors">Conteúdo</a>
            <a href="#faq" className="text-gray-700 hover:text-[#EC8741] transition-colors">FAQ</a>
            <a href="#contacto" className="text-gray-700 hover:text-[#EC8741] transition-colors">Contacto</a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-[#EC8741] transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#inicio" className="block px-3 py-2 text-gray-700 hover:text-[#EC8741] transition-colors">Início</a>
              <a href="#beneficios" className="block px-3 py-2 text-gray-700 hover:text-[#EC8741] transition-colors">Benefícios</a>
              <a href="#conteudo" className="block px-3 py-2 text-gray-700 hover:text-[#EC8741] transition-colors">Conteúdo</a>
              <a href="#faq" className="block px-3 py-2 text-gray-700 hover:text-[#EC8741] transition-colors">FAQ</a>
              <a href="#contacto" className="block px-3 py-2 text-gray-700 hover:text-[#EC8741] transition-colors">Contacto</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;