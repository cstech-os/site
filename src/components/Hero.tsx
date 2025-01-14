import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-16">
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 h-[600px]">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Soluções Tecnológicas para o seu Negócio
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Rede Estruturada, CFTV, Automação Comercial, Suporte Técnico e Informática para Empresas
            </p>
            <a
              href="#services"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-colors"
            >
              Saiba Mais
              <ChevronRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;