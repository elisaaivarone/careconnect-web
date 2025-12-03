
export default function Hero() {
  return (

    <section className="relative bg-white pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* 1. Coluna da Esquerda (Texto e Botões) */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Está procurando um <br className="hidden lg:block" />
              <span className="text-primary">cuidador?</span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0">
              A nossa plataforma tem como objetivo facilitar a conexão entre cuidadores de idosos com as famílias que buscam profissionais confiáveis, 
              oferecendo um ambiente intuitivo para busca e contratação de cuidadores, garantindo ao mesmo tempo a segurança e a qualidade do serviço prestado.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-full font-bold text-lg transition shadow-lg shadow-primary/30">
                Encontre um cuidador
              </button>
              <button className="px-8 py-4 bg-white border-2 border-primary text-primary hover:bg-gray-50 rounded-full font-bold text-lg transition">
                Sou cuidador
              </button>
            </div>
          </div>

          {/* 2. Coluna da Direita (Imagem) */}
          <div className="flex-1 relative w-full max-w-lg lg:max-w-xl">
            <div className="absolute -top-4 -right-4 w-full h-full border-2 border-primary rounded-2xl z-0"></div>
            
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] ">
              <img 
                 src="/img/hero-foto.jpg"
                 alt="Cuidadora e idosa sorrindo no CareConnect"
                 className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}