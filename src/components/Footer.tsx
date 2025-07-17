import React from 'react';
import { Mail, Phone, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contacto" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-6">O Poder Infinito do Não</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Inspirando mulheres a descobrir o poder libertador do "não" através da fé, 
              coragem e autoconhecimento. Junta-te à jornada de transformação.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-[#EC8741] p-2 rounded-full hover:bg-[#d4743a] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-[#EC8741] p-2 rounded-full hover:bg-[#d4743a] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-[#EC8741] p-2 rounded-full hover:bg-[#d4743a] transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="bg-[#EC8741] p-2 rounded-full hover:bg-[#d4743a] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <li><a href="#inicio" className="text-gray-300 hover:text-[#EC8741] transition-colors">Início</a></li>
              <li><a href="#beneficios" className="text-gray-300 hover:text-[#EC8741] transition-colors">Benefícios</a></li>
              <li><a href="#conteudo" className="text-gray-300 hover:text-[#EC8741] transition-colors">Conteúdo</a></li>
              <li><a href="#faq" className="text-gray-300 hover:text-[#EC8741] transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#EC8741] transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#EC8741] transition-colors">Termos de Uso</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#EC8741]" />
                <span className="text-gray-300">geral@marcelinafurtado.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#EC8741]" />
                <span className="text-gray-300">+244 923 440 419</span>
              </div>
            </div>
            
            <div className="mt-8">
              <h5 className="font-semibold mb-4">Newsletter</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Seu email"
                  className="flex-1 px-4 py-2 rounded-l-lg text-gray-900"
                />
                <button className="bg-[#EC8741] px-6 py-2 rounded-r-lg hover:bg-[#d4743a] transition-colors">
                  Subscrever
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Marcelina Jaime Furtado. Todos os direitos reservados. | Transformando vidas através do poder do NÃO.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;