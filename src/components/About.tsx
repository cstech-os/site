import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Sobre a CSTECH Soluções Tecnológicas
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Somos uma empresa especializada em soluções tecnológicas, focada em entregar
              resultados excepcionais para nossos clientes. Com anos de experiência no
              mercado, nossa equipe está preparada para enfrentar qualquer desafio
              tecnológico.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Missão</h3>
                <p className="text-gray-600">
                  Fornecer soluções tecnológicas inovadoras e confiáveis que impulsionem
                  o sucesso de nossos clientes.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Visão</h3>
                <p className="text-gray-600">
                  Ser referência em soluções tecnológicas, reconhecida pela excelência
                  e inovação em nossos serviços.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Valores</h3>
                <p className="text-gray-600">
                  Comprometimento, qualidade, inovação e foco no cliente são os pilares
                  que guiam nossa atuação.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <img
              src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Tecnologia empresarial"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;