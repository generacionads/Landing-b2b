import React from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { ProblemsSolutions } from '../components/ProblemsSolutions';
import { Services } from '../components/Services';
import { Authority } from '../components/Authority';
import { Footer } from '../components/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-gray-900 selection:bg-brand-200 selection:text-brand-900">
      <Header />
      <main>
        <Hero />
        <ProblemsSolutions />
        <Services />
        <Authority />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}