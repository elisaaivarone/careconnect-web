"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { Home, Calendar, MessageCircle, User, Search, Star, MapPin } from "lucide-react";

export default function DashboardPage() {
  const router = useRouter();
  
  const [role, setRole] = useState<string | null>(null);
  const [userName, setUserName] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        router.push("/login");
        return;
      }

      const metadata = session.user.user_metadata;
      setRole(metadata?.role || "patient");
      setUserName(metadata?.name || "Usuário");
      setLoading(false);
    };

    checkUser();
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-200 flex justify-center font-sans">
      
      <div className="w-full max-w-md bg-gray-50 min-h-screen shadow-2xl flex flex-col relative overflow-hidden">
        
        {/* CABEÇALHO DO APP */}
        <div className="bg-primary text-white pt-12 pb-6 px-6 rounded-b-[40px] shadow-md z-10">
          <h1 className="text-2xl font-bold tracking-wide">Olá, {userName.split(' ')[0]}!</h1>
          <p className="text-white/80 text-sm mt-1">
            Encontre o cuidado ideal para hoje.
          </p>
        </div>

        {/* ÁREA DE CONTEÚDO */}
        <div className="flex-1 overflow-y-auto p-6 pb-28 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {role === "patient" ? (
            <PatientDashboard />
          ) : (
            <CaregiverDashboard />
          )}
        </div>

        {/* MENÚ INFERIOR */}
        <div className="absolute bottom-0 w-full bg-white border-t border-gray-200 px-6 py-4 flex justify-between items-center z-20 shadow-[0_-5px_15px_rgba(0,0,0,0.05)]">
          <button className="flex flex-col items-center text-primary">
            <Home size={24} />
            <span className="text-[10px] mt-1 font-medium">Início</span>
          </button>
          <button className="flex flex-col items-center text-gray-400 hover:text-primary transition">
            <Calendar size={24} />
            <span className="text-[10px] mt-1 font-medium">Agenda</span>
          </button>
          <button className="flex flex-col items-center text-gray-400 hover:text-primary transition">
            <MessageCircle size={24} />
            <span className="text-[10px] mt-1 font-medium">Chat</span>
          </button>
          <button className="flex flex-col items-center text-gray-400 hover:text-primary transition">
            <User size={24} />
            <span className="text-[10px] mt-1 font-medium">Perfil</span>
          </button>
        </div>

      </div>
    </div>
  );
}

function PatientDashboard() {
  return (
    <div className="space-y-8">
      
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Buscar por especialidade ou nome..."
          className="w-full bg-white border border-gray-200 rounded-full py-3.5 pl-12 pr-4 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary shadow-sm"
        />
      </div>

      <div>
        <h3 className="font-bold text-gray-800 mb-4 text-sm uppercase tracking-wider">Categorias de Cuidado</h3>
        {/* Usamos classes para esconder a barra de rolagem mas manter a funcionalidade */}
        <div className="flex gap-3 overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {['Idosos', 'Pós-Cirúrgico', 'Infantil', 'PCD', 'Plantão'].map((cat, index) => (
            <button 
              key={cat} 
              className={`flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-medium shadow-sm transition ${
                index === 0 
                ? 'bg-primary text-white border-primary' 
                : 'bg-white border border-gray-100 text-gray-600 hover:border-primary hover:text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-gray-800 text-sm uppercase tracking-wider">Recomendados para você</h3>
          <button className="text-xs text-primary font-bold hover:underline">Ver todos</button>
        </div>
        
        <div className="space-y-4">
          
          {/* Card Profissional 1 */}
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex gap-4 items-center cursor-pointer hover:shadow-md transition">
            <img 
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop" 
              alt="Cuidadora" 
              className="w-16 h-16 rounded-2xl object-cover shadow-sm" 
            />
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <h4 className="font-bold text-gray-800">Ana Silva</h4>
                <div className="flex items-center text-yellow-500 text-xs font-bold bg-yellow-50 px-1.5 py-0.5 rounded">
                  <Star className="w-3 h-3 fill-current mr-1" />
                  4.9
                </div>
              </div>
              <p className="text-xs text-primary font-medium mt-0.5">Enfermeira Especialista</p>
              <div className="flex items-center text-xs text-gray-500 mt-2">
                <MapPin className="w-3 h-3 mr-1" />
                A 2.5 km de você
              </div>
            </div>
          </div>

          {/* Card Profissional 2 */}
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex gap-4 items-center cursor-pointer hover:shadow-md transition">
            <img 
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop" 
              alt="Cuidador" 
              className="w-16 h-16 rounded-2xl object-cover shadow-sm" 
            />
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <h4 className="font-bold text-gray-800">Carlos Mendes</h4>
                <div className="flex items-center text-yellow-500 text-xs font-bold bg-yellow-50 px-1.5 py-0.5 rounded">
                  <Star className="w-3 h-3 fill-current mr-1" />
                  4.7
                </div>
              </div>
              <p className="text-xs text-primary font-medium mt-0.5">Cuidador de Idosos</p>
              <div className="flex items-center text-xs text-gray-500 mt-2">
                <MapPin className="w-3 h-3 mr-1" />
                A 4.1 km de você
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

// ============================================================================
// VISÃO DO CUIDADOR (Placeholder Temporário)
// ============================================================================
function CaregiverDashboard() {
  return (
    <div className="space-y-6">
      <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
        <h3 className="font-bold text-gray-800">Meu Status</h3>
        <div className="flex items-center gap-2 mt-2">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <p className="text-sm text-gray-600">Disponível para novos pacientes</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 text-center">
          <h4 className="text-2xl font-bold text-primary">0</h4>
          <p className="text-xs text-gray-500">Pacientes Ativos</p>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 text-center">
          <h4 className="text-2xl font-bold text-primary">R$ 0</h4>
          <p className="text-xs text-gray-500">Ganhos do Mês</p>
        </div>
      </div>
    </div>
  );
}