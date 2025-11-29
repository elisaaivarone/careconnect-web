import { Search, HeartPulse, CalendarCheck, ShieldCheck, MapPin, MessageCircle } from "lucide-react";


const features = [
  {
    icon: Search,
    title: "Busca Inteligente",
    description: "Encontre cuidadores ideais com base em especialidade, localização e avaliações de outras famílias."
  },
  {
    icon: ShieldCheck,
    title: "Segurança Garantida",
    description: "Todos os profissionais passam por verificação rigorosa de antecedentes e certificações."
  },
  {
    icon: HeartPulse,
    title: "Relatório de Saúde",
    description: "Acompanhe sinais vitais, medicação e humor do paciente através de relatórios diários no app."
  },
  {
    icon: CalendarCheck,
    title: "Agendamento Fácil",
    description: "Organize turnos, tarefas e rotinas de medicação com uma agenda compartilhada e intuitiva."
  },
  {
    icon: MapPin,
    title: "Geolocalização",
    description: "Saiba exatamente quando o cuidador chegou e saiu através do check-in via GPS."
  },
  {
    icon: MessageCircle,
    title: "Chat Integrado",
    description: "Comunicação direta e segura entre familiares e cuidadores para alinhar detalhes do dia a dia."
  }
];

export default function Features() {
  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Conheça nossos serviços e diferenciais
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tecnologia e humanização unidas para oferecer o melhor cuidado para quem você ama.
          </p>
        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* MAPPING: Gerando o HTML automaticamente baseado nos dados acima */}
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 group"
            >
              <div className="w-14 h-14 bg-accent/30 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}