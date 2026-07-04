"use client";

import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function RegisterPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] =useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    role: "patient", 
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: { 
            data: {
                name: formData.name,
                phone: formData.phone,
                address: formData.address,
                role: formData.role
            }
        }
    });

    if (error) {
        console.error("Erro ao criar conta:", error.message);
        setErrorMessage("Ocorreu um erro ao criar a conta. Verifique os dados e tente novamente.");
    } else {
        console.log("Sucesso!", data);
        setSuccessMessage("Conta criada com sucesso! Redirecionando para o login...")

        setTimeout(() =>{
            router.push("/login");
        }, 2000);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col relative font-sans">
      
      {/* --- TOPO AZUL --- */}
      <div className="bg-primary rounded-b-[50px] w-full px-8 pt-12 pb-16 relative shadow-md">
        <Link href="/login" className="absolute top-6 left-6 text-white hover:text-white/80 transition">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <div className="mt-8 text-left">
          <h1 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
            Crie a sua conta!
          </h1>
        </div>
      </div>

      {/* --- CORPO DO FORMULÁRIO --- */}
      <div className="flex-1 px-8 pt-8 pb-12 w-full max-w-md mx-auto">
        
        {errorMessage && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm text-center">
            {errorMessage}
          </div>
        )}
        {successMessage && (
          <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg text-sm text-center font-medium">
            {successMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          
          <div>
            <input
              type="text"
              placeholder="Nome"
              required
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-transparent border-b border-gray-400 text-gray-800 placeholder-gray-500 focus:border-primary focus:outline-none py-2 transition"
            />
          </div>

          <div>
            <input
              type="email"
              placeholder="E-mail"
              required
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-transparent border-b border-gray-400 text-gray-800 placeholder-gray-500 focus:border-primary focus:outline-none py-2 transition"
            />
          </div>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full bg-transparent border-b border-gray-400 text-gray-800 placeholder-gray-500 focus:border-primary focus:outline-none py-2 transition pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 bottom-2 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <div>
            <input
              type="tel"
              placeholder="Celular"
              required
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full bg-transparent border-b border-gray-400 text-gray-800 placeholder-gray-500 focus:border-primary focus:outline-none py-2 transition"
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Endereço"
              required
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              className="w-full bg-transparent border-b border-gray-400 text-gray-800 placeholder-gray-500 focus:border-primary focus:outline-none py-2 transition"
            />
          </div>

          <div className="pt-2">
            <p className="text-gray-600 mb-4 text-sm font-medium">Selecione o perfil:</p>
            <div className="flex gap-8 justify-center md:justify-start">
              
              <label className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="radio"
                  name="role"
                  value="patient"
                  checked={formData.role === "patient"}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-5 h-5 text-primary focus:ring-primary border-gray-300"
                />
                <span className="text-gray-700 group-hover:text-primary transition">Paciente</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="radio"
                  name="role"
                  value="caregiver"
                  checked={formData.role === "caregiver"}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-5 h-5 text-primary focus:ring-primary border-gray-300"
                />
                <span className="text-gray-700 group-hover:text-primary transition">Cuidador</span>
              </label>

            </div>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={loading} // Desativa o botão se estiver carregando
              className="w-full bg-primary text-white font-bold text-lg py-3.5 rounded-full shadow-lg hover:bg-primary-dark transition transform active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? "Criando conta..." : "Cadastrar"}
            </button>
          </div>
        </form>

        <div className="mt-6 text-center text-sm font-medium text-gray-800">
          Você já tem uma conta?{" "}
          <Link href="/login" className="text-primary italic hover:underline">
            Faça Login
          </Link>
        </div>

        <div className="flex items-center justify-center gap-4 mt-8 mb-6">
          <div className="w-10 h-px bg-gray-300"></div>
          <span className="text-gray-800 font-serif italic text-lg">OR</span>
          <div className="w-10 h-px bg-gray-300"></div>
        </div>

        {/* Botões Sociais (Visual apenas) */}
        <div className="space-y-4">
          <button type="button" className="w-full bg-gray-200/60 text-red-400 font-medium py-3 rounded-full hover:bg-gray-200 transition">
            Login with Gmail
          </button>
          <button type="button" className="w-full bg-gray-200/60 text-blue-500 font-medium py-3 rounded-full hover:bg-gray-200 transition">
            Login with Facebook
          </button>
        </div>

      </div>
    </div>
  );
}