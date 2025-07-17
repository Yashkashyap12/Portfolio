import React from 'react'
import AboutSection from '@/components/layout/About/AboutSection';
import Footer from '@/components/layout/Footer/Footer';
import Navbar from '@/components/layout/Header/Navbar';
import Hero from '@/components/layout/HeroSection/Hero';
import SkillsCard from '@/components/layout/Skills/SkillsCard';
import Testimonials from '@/components/layout/Testimonials';
import ContactForm from '@/components/common/form/ContactForm';

const page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutSection />
      <SkillsCard />
      <Testimonials />
      <ContactForm />
      <Footer />
    </>
  )
}

export default page;