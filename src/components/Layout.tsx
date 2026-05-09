import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Instagram, 
  Globe
} from 'lucide-react';
import CustomCursor from './CustomCursor';
import AnimatedCounter from './AnimatedCounter';

interface LayoutProps {
  children: React.ReactNode;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

const Layout = ({ children, darkMode, setDarkMode }: LayoutProps) => {
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="h-screen overflow-y-auto snap-y snap-mandatory transition-colors duration-500 overflow-x-hidden selection:bg-electric-orange selection:text-white">
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
            src="https://ik.imagekit.io/x8axvbbz3/0508%20(2).mp4" 
            type="video/mp4" 
          />
        </video>
        <div className="absolute inset-0 bg-gradient-radial from-electric-orange/5 via-background/40 to-background dark:via-dark-base/50 dark:to-dark-base z-20" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-sm bg-background/10 border-b border-white/5" aria-label="Main Navigation">
        <div className="text-2xl font-display font-black tracking-tighter flex items-center">
          ADAN<span className="text-electric-orange">_CB90</span>
        </div>

        <div className="flex items-center space-x-4">
          {/* Buttons removed per request */}
        </div>
      </nav>

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
    </div>
  );
};

export default Layout;
