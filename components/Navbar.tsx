
import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';
import { useTheme } from './ThemeContext';
import { Sun, Moon, Zap, Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavigateHome: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigateHome }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-[150] transition-all duration-700 ${
      scrolled ? 'bg-[var(--bg-primary)]/90 backdrop-blur-xl border-b border-[#39FF14]/10 py-3 shadow-2xl' : 'bg-transparent py-10'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div 
          onClick={onNavigateHome}
          className="flex items-center gap-3 group cursor-pointer relative"
        >
          <div className="w-10 h-10 bg-[#39FF14] clip-path-polygon-[0%_0%,100%_0%,100%_70%,70%_100%,0%_100%] group-hover:bg-[#BF00FF] transition-all duration-500 transform group-hover:scale-110 shadow-[0_0_10px_#39FF14]"></div>
          <div className="flex flex-col">
             <span className="font-orbitron text-2xl font-black tracking-tighter text-[var(--text-primary)] leading-none">VENOM<span className="text-[#39FF14]">IT</span></span>
             <span className="font-orbitron text-[8px] tracking-[0.6em] text-neutral-500 group-hover:text-[#BF00FF] transition-colors uppercase">BIO_STUDIO_V4</span>
          </div>
        </div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex gap-12 items-center">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="group relative font-orbitron text-[10px] font-black text-neutral-500 hover:text-[var(--text-primary)] transition-all duration-300 uppercase tracking-[0.4em]"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#39FF14] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}

          {/* Theme Toggle Button */}
          <button 
            onClick={toggleTheme}
            className="p-3 border border-neutral-800 hover:border-[#39FF14] transition-all duration-300 group relative overflow-hidden"
            title="MUTATE_ENVIRONMENT"
          >
            <div className="absolute inset-0 bg-[#39FF14]/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            {theme === 'dark' ? (
              <Sun size={14} className="text-[#39FF14] relative z-10" />
            ) : (
              <Moon size={14} className="text-[#BF00FF] relative z-10" />
            )}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
           <button 
            onClick={toggleTheme}
            className="p-2 text-neutral-500"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-[#39FF14]">
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[72px] bg-black/95 backdrop-blur-2xl p-10 space-y-8 animate-fade-in z-50">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              onClick={() => setMobileMenuOpen(false)}
              className="block font-orbitron text-2xl font-black text-white hover:text-[#39FF14] transition-colors uppercase tracking-[0.2em]"
            >
              {item.label}
            </a>
          ))}
          <button className="w-full py-5 bg-[#39FF14] text-black font-orbitron font-black tracking-widest">
            SYNC_NOW
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
