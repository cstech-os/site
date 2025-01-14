import React from 'react';
import { Network, Camera, Store, Laptop, Wrench } from 'lucide-react';

const services = [
  {
    title: 'Rede Estruturada',
    description: 'Projetamos e implementamos redes de alta performance para sua empresa.',
    icon: Network,
  },
  {
    title: 'CFTV',
    description: 'Sistemas de segurança com câmeras de alta definição para monitoramento 24/7.',
    icon: Camera,
  },
  {
    title: 'Automação Comercial',
    description: 'Soluções integradas para automação de processos comerciais.',
    icon: Store,
  },
  {
    title: 'Analista de Suporte',
    description: 'Suporte técnico especializado para resolver problemas de TI.',
    icon: Wrench,
  },
  {
    title: 'Informática para Empresas',
    description: 'Manutenção de computadores, servidores e infraestrutura de TI.',
    icon: Laptop,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossos Serviços</h2>
          <p className="text-xl text-gray-600 mb-12">
            Soluções completas em tecnologia para sua empresa
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <service.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;