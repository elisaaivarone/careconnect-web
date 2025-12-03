"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* LOGO */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <span className="text-2xl font-bold text-gray-800">
              Care<span className="text-primary">CONNECT</span>
            </span>
          </div>

          {/* MENU DESKTOP */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-primary font-medium transition">
              Início
            </Link>
            <Link href="#servicos" className="text-gray-600 hover:text-primary font-medium transition">
              Serviços
            </Link>
            <Link href="#sobre" className="text-gray-600 hover:text-primary font-medium transition">
              Sobre
            </Link>
            <Link href="#depoimentos" className="text-gray-600 hover:text-primary font-medium transition">
              Depoimentos
            </Link>
            <button className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-full font-medium transition shadow-lg shadow-primary/30">
              Login
            </button>
          </div>

          {/* BOTÃO MOBILE */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-primary focus:outline-none"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* MENU MOBILE EXPANDIDO */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            <Link href="/" className="block px-3 py-2 text-gray-600 font-medium">Início</Link>
            <Link href="#servicos" className="block px-3 py-2 text-gray-600 font-medium">Serviços</Link>
            <Link href="#sobre" className="block px-3 py-2 text-gray-600 font-medium">Sobre</Link>
            <Link href="#depoimentos" className="block px-3 py-2 text-gray-600 font-medium">Depoimentos</Link>
            <button className="mt-4 w-full bg-primary text-white px-4 py-2 rounded-md">
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}