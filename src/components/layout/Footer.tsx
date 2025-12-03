import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <span className="text-2xl font-bold text-white">
                Care<span className="text-primary">CONNECT</span>
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Conectando corações e cuidando de quem você ama com segurança, tecnologia e carinho.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-primary transition">Início</Link></li>
              <li><Link href="#servicos" className="hover:text-primary transition">Serviços</Link></li>
              <li><Link href="#sobre" className="hover:text-primary transition">Quem Somos</Link></li>
              <li><Link href="#depoimentos" className="hover:text-primary transition">Depoimentos</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Suporte</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-primary transition">Central de Ajuda</Link></li>
              <li><Link href="#" className="hover:text-primary transition">Política de Privacidade</Link></li>
              <li><Link href="#" className="hover:text-primary transition">Termos de Uso</Link></li>
              <li><Link href="#" className="hover:text-primary transition">Trabalhe Conosco</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Fale Conosco</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm">Av. Paulista, 1000 - Bela Vista, São Paulo - SP</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm">(11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm">contato@careconnect.com.br</span>
              </li>
            </ul>
          </div>

        </div>

        <hr className="border-gray-800 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} CareConnect. Todos os direitos reservados.
          </p>
          
          <div className="flex gap-4">
            <Link href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition">
              <Instagram className="w-5 h-5" />
            </Link>
            <Link href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition">
              <Facebook className="w-5 h-5" />
            </Link>
            <Link href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition">
              <Linkedin className="w-5 h-5" />
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}