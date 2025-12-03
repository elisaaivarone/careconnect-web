import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ana Paula Souza",
    role: "Filha de paciente",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
    content: "A plataforma me salvou! Encontrei a D. Maria em menos de 2 horas. Ela é super atenciosa com meu pai e o app me avisa quando ela chega.",
    stars: 5,
  },
  {
    name: "Carlos Eduardo",
    role: "Sobrinho de paciente",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    content: "A facilidade de ver o relatório de saúde pelo celular me deixa muito mais tranquilo, mesmo morando em outra cidade.",
    stars: 5,
  },
  {
    name: "Fernanda Lima",
    role: "Neta de paciente",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop",
    content: "O processo de contratação é muito seguro. Ver os antecedentes criminais e as avaliações de outras famílias fez toda a diferença.",
    stars: 4,
  }
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 bg-accent/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Famílias conectadas e felizes
          </h2>
          <p className="text-lg text-gray-600">
            Veja como estamos transformando o cuidado domiciliar no Brasil.
          </p>
        </div>

        {/* Grid de Depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 relative">
              
              {/* Aspas decorativas (Visual) */}
              <span className="absolute top-4 right-8 text-9xl text-dark font-serif opacity-20 select-none">
                &rdquo;
              </span>

              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < item.stars ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} 
                  />
                ))}
              </div>

              <p className="text-gray-700 mb-6 relative z-10 italic">
                {item.content}
              </p>

              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}