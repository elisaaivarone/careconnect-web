"use client";

import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(""); 

    const { data, error } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    })

    if (error) {
      console.error("Erro ao fazer login:", error.message);
      setErrorMessage("Ocorreu um erro ao fazer login. Verifique os dados e tente novamente.");
      setLoading(false);
    } else {
      console.log("Login bem-sucedido!", data.user);
      router.push("/dashboard");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col relative">

      <div className="absolute top-6 left-6 z-10">
        <Link href="/" className="text-gray-500 hover:text-primary transition">
           <ArrowLeft className="w-6 h-6" />
        </Link>
      </div>

      {/* LOGO */}
      <div className="pt-12 pb-8 text-center bg-white z-0">
        <h1 className="text-4xl font-bold text-gray-800 tracking-tight">
          Care<span className="text-primary">CONNECT</span>
        </h1>
      </div>

      {/* ÁREA AZUL */}
      <div className="flex-1 flex flex-col justify-end">
   
        <div className="bg-primary rounded-t-[60px] w-full px-8 pb-12 pt-24 relative shadow-[0_-10px_40px_rgba(0,0,0,0.1)] min-h-[75vh] flex flex-col justify-center">
          
          <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-64 h-64 flex items-center justify-center z-10">
             <img 
               src="/img/login-illustration.png" 
               alt="Ilustração Login"
               className="w-full h-full object-contain mix-blend-multiply filter brightness-110 contrast-125"
             />
          </div>

          {errorMessage && (
            <div className="w-full max-w-md mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded text-center text-sm">
              {errorMessage}
            </div>
          )}  

          <form onSubmit={handleSubmit} className="space-y-8 w-full px-4 md:max-w-md mx-auto z-20">

            <div>
              <label className="text-white text-sm ml-1 block">Email</label>
              <input
                type="email"
                required
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-transparent border-b-2 border-white/30 text-white placeholder-white/50 focus:border-white focus:outline-none py-2 transition px-2 text-lg"
              />
            </div>

            <div className="relative">
              <label className="text-white text-sm ml-1 block">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                required
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full bg-transparent border-b-2 border-white/30 text-white placeholder-white/50 focus:border-white focus:outline-none py-2 transition px-2 pr-10 text-lg"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 bottom-2 text-white/70 hover:text-white"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <div className="text-right">
              <a href="#" className="text-xs text-white/80 hover:text-white hover:underline">
                Esqueceu seu email?
              </a>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-white text-primary font-bold text-lg py-3 rounded-full hover:bg-gray-100 hover:shadow-lg transition transform active:scale-95 mt-4"
            >
              {loading ? "Entrando..." : "Login"}
            </button>
          </form>

          {/* Link para Cadastro */}
          <p className="text-center text-white/80 text-sm mt-8">
            Não tem uma conta?{" "}
            <Link href="/register" className="text-white font-bold hover:underline">
              Cadastre-se
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}