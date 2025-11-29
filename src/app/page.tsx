import Navbar from "@/components/layout/Navbar";
import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <Features />
      
      <div className="pt-32 px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-800">
          Bem-vindo ao CareConnect
        </h1>
        <p className="mt-4 text-gray-600">Teste do menu (tente diminuir a tela para ver o menu mobile)</p>
      </div>
    </main>
  );
}