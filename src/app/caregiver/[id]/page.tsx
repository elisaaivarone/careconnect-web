"use client";

import Link from "next/link";
import { ArrowLeft, Star, MapPin, Award, Clock, ShieldCheck, MessageCircle } from "lucide-react";

export default function CaregiverProfilePage() {
  const caregiver = {
    name: "Jessica Jung",
    age: 41,
    role: "Cuidadora de Idosos",
    shift: "Noite",
    gender: "Feminina",
    email: "jessicajung@gmail.com",
    birthDate: "05/03/1983",
    address: "Campo Belo - São Paulo",
    rating: 4.8,
    distance: "4.5 km",
    qualifications: "Tenho mais de 10 anos de experiência cuidando de idosos com Alzheimer e Parkinson. Sou técnica em enfermagem e possuo curso de primeiros socorros atualizados. Sou paciente, dedicada e busco sempre promover a qualidade de vida dos meus pacientes.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop"
  };

  return (
    <div className="min-h-screen bg-gray-200 flex justify-center font-sans">
      
      {/* CONTAINER DO APP */}
      <div className="w-full max-w-md bg-white min-h-screen shadow-2xl relative flex flex-col overflow-hidden">
        
        {/* FUNDO AZUL ABSOLUTO */}
        <div className="absolute top-0 left-0 w-full h-72 bg-primary z-0"></div>

        <div className="flex-1 overflow-y-auto relative z-10 pb-28">
 
          <div className="flex items-center justify-between px-6 pt-12 pb-2">
            <Link href="/dashboard" className="text-white hover:text-white/80 transition">
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <h1 className="text-xl font-bold tracking-wide text-white">CareCONNECT</h1>
            <div className="w-6" />
          </div>

          {/* CARTÃO BRANCO */}
          <div className="bg-white rounded-t-[40px] mt-12 relative px-6 pb-12 pt-16 min-h-screen shadow-[0_-5px_15px_rgba(0,0,0,0.05)]">
  
            <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 w-28 h-28 rounded-full border-[6px] border-white shadow-sm overflow-hidden bg-white z-20">
              <img 
                src={caregiver.image} 
                alt={caregiver.name} 
                className="w-full h-full object-cover object-top" 
              />
            </div>

            <div className="flex flex-col items-center text-center">
              <h2 className="text-2xl font-bold text-gray-800">{caregiver.name}</h2>
              <p className="text-gray-500 font-medium mt-0.5">{caregiver.role} • {caregiver.age} anos</p>

              <div className="flex gap-3 mt-4 w-full justify-center mb-8">
                 <div className="bg-blue-50 text-primary border border-blue-100 px-4 py-1.5 rounded-full text-sm font-bold flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {caregiver.shift}
                 </div>
                 <div className="bg-yellow-50 text-yellow-600 border border-yellow-100 px-4 py-1.5 rounded-full text-sm font-bold flex items-center gap-1.5">
                    <Star className="w-4 h-4 fill-current" />
                    {caregiver.rating}
                 </div>
              </div>
            </div>

            <div className="space-y-6 pt-2">
              <h3 className="font-bold text-gray-800 text-lg border-b border-gray-100 pb-3">
                Informações do Profissional
              </h3>
              
              <div className="grid grid-cols-2 gap-y-5 gap-x-2 text-sm">
                 <div>
                   <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Gênero</p>
                   <p className="font-medium text-gray-800">{caregiver.gender}</p>
                 </div>
                 <div>
                   <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Nascimento</p>
                   <p className="font-medium text-gray-800">{caregiver.birthDate}</p>
                 </div>
                 <div className="col-span-2">
                   <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">E-mail</p>
                   <p className="font-medium text-gray-800 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-green-500" />
                      {caregiver.email}
                   </p>
                 </div>
                 <div className="col-span-2">
                   <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Localização</p>
                   <p className="font-medium text-gray-800 flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-primary" />
                      {caregiver.address} <span className="text-gray-400 font-normal">({caregiver.distance})</span>
                   </p>
                 </div>
              </div>
            </div>

            <div className="mt-10">
               <h3 className="font-bold text-gray-800 text-lg mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  Minhas Qualificações
               </h3>
               <div className="bg-gray-50/80 rounded-2xl p-5 border border-gray-100">
                  <p className="text-gray-600 text-[15px] leading-relaxed">
                    {caregiver.qualifications}
                  </p>
               </div>
            </div>

          </div>
        </div>

        <div className="absolute bottom-0 w-full bg-white border-t border-gray-100 p-4 px-6 flex gap-3 z-20 pb-safe shadow-[0_-5px_15px_rgba(0,0,0,0.03)]">
          <button className="flex-1 bg-white border-2 border-primary text-primary font-bold py-3.5 rounded-2xl hover:bg-blue-50 transition flex items-center justify-center gap-2">
            <MessageCircle className="w-5 h-5" />
            Bater papo
          </button>
          <button className="flex-[2] bg-primary text-white font-bold py-3.5 rounded-2xl shadow-lg shadow-blue-200 hover:bg-primary-dark transition active:scale-[0.98]">
            Contratar
          </button>
        </div>

      </div>
    </div>
  );
}