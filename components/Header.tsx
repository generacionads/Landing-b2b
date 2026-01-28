'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';
import Image from 'next/image';
import Link from 'next/link';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 relative h-12 w-48 cursor-pointer z-50">
            <Image 
              src="https://i.ibb.co/jk88gDvQ/Group-8.png" 
              alt="Generación Ads Logo" 
              fill
              priority
              className="object-contain object-left"
              sizes="(max-width: 768px) 150px, 200px"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex gap-6">
              {['Problemas', 'Soluciones', 'Resultados'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-600 hover:text-brand-600 font-light transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
            <Button size="sm" onClick={scrollToContact}>
              Propuesta sin compromiso
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 p-2 focus:outline-none transition-transform duration-300"
              aria-label="Abrir menú"
            >
              <div className={`transform transition-transform duration-300 ${mobileMenuOpen ? 'rotate-90' : 'rotate-0'}`}>
                {mobileMenuOpen ? <X /> : <Menu />}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with Smooth Easing */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          mobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-4 flex flex-col gap-4">
          {['Problemas', 'Soluciones', 'Resultados'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-600 hover:text-brand-600 font-light py-2 px-2 rounded-lg hover:bg-gray-50 transition-colors"
            >
              {item}
            </a>
          ))}
          <div className="pt-2">
            <Button fullWidth onClick={scrollToContact}>
              Propuesta sin compromiso
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};