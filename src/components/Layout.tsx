import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Instagram, 
  MessageCircle, 
  Calendar, 
  Zap, 
  Globe, 
  Menu,
  X,
  Sun,
  Moon,
  Download
} from 'lucide-react';
import CustomCursor from './CustomCursor';
import AnimatedCounter from './AnimatedCounter';

interface LayoutProps {
  children: React.ReactNode;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

const Layout = ({ children, darkMode, setDarkMode }: LayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Scroll to top on route change
  useEffect(() => {
    const mainElement = document.querySelector('div.snap-y');
    if (mainElement) {
        mainElement.scrollTop = 0;
    }
  }, [location.pathname]);

  return (
    <div className={`h-screen overflow-y-auto ${location.pathname === '/' ? 'snap-y snap-mandatory' : ''} transition-colors duration-500 overflow-x-hidden selection:bg-electric-orange selection:text-white`}>
      <CustomCursor />
      
      {/* Background Video Layer */}
      <div className="fixed inset-0 w-full h-full -z-[100] overflow-hidden pointer-events-none bg-dark-base">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          key="bg-video"
          className="w-full h-full object-cover opacity-60 relative z-10"
        >
          <source 
            src="https://ik.imagekit.io/x8axvbbz3/Perpetual_motion_holographic_ele__202605081847.mp4" 
            type="video/mp4" 
          />
        </video>
        <div className="absolute inset-0 bg-gradient-radial from-electric-orange/5 via-background/40 to-background dark:via-dark-base/50 dark:to-dark-base z-20" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-sm bg-background/10 border-b border-white/5" aria-label="Main Navigation">
        <Link 
          to="/"
          className="text-2xl font-display font-black tracking-tighter flex items-center"
        >
          ADAN<span className="text-electric-orange">_CB90</span>
        </Link>

        <div className="hidden md:flex space-x-8" role="menubar">
          {[
            { name: 'Expertise', path: '/#expertise' },
            { name: 'Laboratorio', path: '/laboratorio' },
            { name: 'Metodología', path: '/metodologia' },
            { name: 'Recursos', path: '/recursos' },
            { name: 'Blog', path: '/blog' }
          ].map((item) => (
            <Link 
              key={item.name} 
              to={item.path}
              className="text-sm font-medium hover:text-electric-orange transition-colors uppercase tracking-widest"
              role="menuitem"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-expanded={isMenuOpen}
            aria-label="Toggle Menu"
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-[73px] w-full bg-background/95 backdrop-blur-xl z-50 md:hidden border-b border-white/10"
          >
            <div className="flex flex-col p-6 space-y-4">
              {[
                { name: 'Expertise', path: '/#expertise' },
                { name: 'Laboratorio', path: '/laboratorio' },
                { name: 'Metodología', path: '/metodologia' },
                { name: 'Recursos', path: '/recursos' },
                { name: 'Blog', path: '/blog' }
              ].map((item) => (
                <Link 
                  key={item.name} 
                  to={item.path}
                  className="text-xl font-display font-bold uppercase"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative z-40">
        {children}
      </main>

      {/* Consistent Footer with Social Proof */}
      <footer id="contact" className="py-20 border-t border-white/5 px-6 mt-20">
        <div className="max-w-7xl mx-auto flex flex-col items-center mb-20">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.03, y: -4 }}
            transition={{ 
              default: { duration: 0.3 },
              scale: { type: "spring", stiffness: 400, damping: 25 },
              y: { type: "spring", stiffness: 400, damping: 25 }
            }}
            className="flex flex-col items-center interactive cursor-none"
          >
            <div className="flex items-center space-x-3 mb-3 px-8 py-3 bg-white/[0.03] dark:bg-black/20 backdrop-blur-xl rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(255,102,0,0.1)] hover:border-electric-orange/30 transition-all duration-500">
              <Instagram className="text-electric-orange drop-shadow-[0_0_8px_rgba(255,102,0,0.5)]" size={28} />
              <span className="text-4xl md:text-5xl font-display font-black tracking-tighter text-foreground">
                +<span className="text-electric-orange"><AnimatedCounter value={19000} /></span>
              </span>
            </div>
            <span className="text-xs font-bold opacity-60 uppercase tracking-[0.4em] text-foreground">Comunidad Digital Global</span>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 text-foreground/40 text-sm">
          <div className="flex space-x-6">
            <Instagram className="hover:text-electric-orange cursor-pointer transition-colors" />
            <Globe className="hover:text-electric-orange cursor-pointer transition-colors" />
          </div>
          
          <div className="font-display uppercase tracking-widest font-bold text-foreground">
            &copy; 2026 ADAN_CB90 - FUTURE IS NOW
          </div>

          <div className="flex space-x-8">
            <a href="#" className="glow-orange transition-all duration-300">Privacy</a>
            <a href="#" className="glow-orange transition-all duration-300">Digital Ethics</a>
          </div>
        </div>
      </footer>

      {/* Dedicated Lead Magnet Banner (prompted) */}
      <motion.div 
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center bg-electric-orange text-white py-6 px-3 rounded-l-2xl shadow-2xl group overflow-hidden"
      >
        <Link to="/recursos" className="flex flex-col items-center space-y-4">
          <Download className="animate-bounce" size={24} />
          <span className="[writing-mode:vertical-lr] font-bold uppercase tracking-widest text-xs rotate-180">Descargar Kit de Inicio</span>
        </Link>
        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 pointer-events-none" />
      </motion.div>

      {/* Floating Smart-Contact Button */}
      <motion.div
        drag
        dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
        initial={{ scale: 0, y: 100 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ type: 'spring', bounce: 0.6, delay: 1 }}
        className="fixed bottom-8 right-8 z-50 group"
      >
        <div className="absolute bottom-full right-0 mb-4 flex flex-col items-end space-y-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all pointer-events-none group-hover:pointer-events-auto">
          <a 
            href="https://wa.me/34000000000" 
            target="_blank" 
            className="px-4 py-2 bg-green-500 text-white rounded-lg flex items-center space-x-2 shadow-lg hover:scale-105 transition-transform"
          >
            <MessageCircle size={18} />
            <span>WhatsApp</span>
          </a>
          <a 
            href="https://calendly.com" 
            target="_blank" 
            className="px-4 py-2 bg-blue-500 text-white rounded-lg flex items-center space-x-2 shadow-lg hover:scale-105 transition-transform"
          >
            <Calendar size={18} />
            <span>Calendly</span>
          </a>
        </div>
        
        <button className="w-16 h-16 bg-electric-orange text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-90 transition-all tech-heart-pulse cursor-none">
          <Zap size={32} />
        </button>
      </motion.div>
    </div>
  );
};

export default Layout;
