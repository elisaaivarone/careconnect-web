import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* 1. COLUNA DA ESQUERDA (IMAGEM) */}
          <div className="flex-1 relative">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary rounded-2xl z-0"></div>
            
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl aspect-square lg:aspect-[4/3]">
              <img 
                 src="/img/about-foto.jpg"
                 alt="Mãos dadas"
                 className="w-full h-full object-cover"
              />
            </div>

            {/* Card flutuante de "Experiência" */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100 z-20 hidden md:block">
              <p className="text-4xl font-bold text-primary">2+</p>
              <p className="text-sm text-gray-600 font-medium">Anos conectando<br/>famílias</p>
            </div>
          </div>

          {/* 2. COLUNA DA DIREITA (TEXTO) */}
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Entenda quem somos e <br/>
              <span className="text-primary">porque existimos</span>
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              A população está envelhecendo e muitas famílias enfrentam dificuldades para encontrar cuidadores qualificados e confiáveis.
            </p>

            <p className="text-gray-600 leading-relaxed">
              O <strong>CareConnect</strong> nasceu da necessidade de unir tecnologia e humanização. Nossa missão é garantir que seu ente querido receba o melhor cuidado possível, com a segurança e transparência que você merece.
            </p>

            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-primary w-6 h-6" />
                <span className="text-gray-700 font-medium">Profissionais verificados rigorosamente</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-primary w-6 h-6" />
                <span className="text-gray-700 font-medium">Suporte humanizado 24h</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-primary w-6 h-6" />
                <span className="text-gray-700 font-medium">Tecnologia de monitoramento em tempo real</span>
              </div>
            </div>

            <button className="mt-8 px-8 py-3 bg-secondary/20 text-primary-dark hover:bg-secondary/40 font-bold rounded-full transition">
              Ler nossa história completa
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}