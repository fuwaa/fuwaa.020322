import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import About from '../components/About';
import Footer from '../components/Footer';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import { useEffect } from 'react';

export default function Home() {
  return (
    <main className="font-Manrope relative">
        <SEO
          title="Home"
         />
          <Navbar />
          <Header
            image="/bg.png"
          />
          <About />
          <Skills />
          <Projects />
          <Contact />
            <Footer />
    </main>
  )
}
