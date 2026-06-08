import React, { createContext, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import LoadingScreen from './components/LoadingScreen';

export const ThemeContext = createContext();

function App() {
  const [isDark, setIsDark] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <AnimatePresence>
        {isLoading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      <div
        className={`${
          isDark
            ? 'bg-gradient-to-b from-slate-950 via-blue-950 to-slate-900'
            : 'bg-gradient-to-b from-white via-blue-50 to-slate-100'
        } min-h-screen text-white transition-colors duration-300`}
      >
        {/* Particle Background */}
        <div className="fixed inset-0 z-0">
          <ParticleBackground isDark={isDark} />
        </div>

        {/* Content */}
        <div className="relative z-10 perspective-3d preserve-3d">
          <Navbar isDark={isDark} toggleTheme={toggleTheme} />
          
          <main className="transform-gpu">
            <Hero isDark={isDark} />
            <About isDark={isDark} />
            <Skills isDark={isDark} />
            <Projects isDark={isDark} />
            <Experience isDark={isDark} />
            <Achievements isDark={isDark} />
            <Contact isDark={isDark} />
          </main>

          <Footer isDark={isDark} />
        </div>

        {/* Animated Background Elements */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          {isDark && (
            <>
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700" />
            </>
          )}
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
