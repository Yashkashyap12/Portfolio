'use client';

import React from 'react';
import AboutSection from '@/components/layout/About/AboutSection';
import Footer from '@/components/layout/Footer/Footer';
import Navbar from '@/components/layout/Header/Navbar';
import Hero from '@/components/layout/HeroSection/Hero';
import SkillsCard from '@/components/layout/Skills/SkillsCard';
import Testimonials from '@/components/layout/Testimonials';
import ContactForm from '@/app/ContactForm';

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Static part like Navbar */}
      <Navbar />

      {/* Main content area that grows */}
      <main className="flex-grow">
        <Hero />
        <AboutSection />
        <SkillsCard />
        <Testimonials />
        <ContactForm />
      </main>

      {/* Footer always at the bottom */}
      <Footer />
    </div>
  );
};

export default Page;
