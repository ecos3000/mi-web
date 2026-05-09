import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { 
  Instagram, 
  ChevronRight, 
  Cpu, 
  Zap, 
  ShieldCheck,
  MousePointer2,
  Globe
} from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';
import PageTransition from '../components/PageTransition';

const ServiceCard = ({ title, description, icon: Icon, delay, link }: any) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, rotate: 5, filter: 'blur(15px)' },
        visible: { opacity: 1, rotate: 0, filter: 'blur(0px)' }
      }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="group relative p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-electric-orange/50 transition-all duration-500"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-electric-orange/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">
        <div className="w-12 h-12 bg-electric-orange/20 rounded-lg flex items-center justify-center mb-6 text-electric-orange group-hover:scale-110 transition-transform duration-500 shadow-[0_0_15px_rgba(255,102,0,0.3)]">
          <Icon size={24} />
        </div>
        <h3 className="text-2xl font-display font-bold mb-4 tracking-tight">{title}</h3>
        <p className="text-foreground/70 leading-relaxed mb-6">
          {description}
        </p>
        <Link to={link} className="flex items-center text-electric-orange font-medium group/btn">
          Explorar {title} <ChevronRight className="ml-1 group-hover/btn:translate-x-1 transition-transform" size={18} />
        </Link>
      </div>
    </motion.div>
  );
};

export default function Home() {
  const [glitchActive, setGlitchActive] = useState(false);
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -400]);

  useEffect(() => {
    const triggerGlitch = () => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 500);
    };
    const interval = setInterval(triggerGlitch, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-between py-32 px-6 text-center snap-start">
        <div className="flex-1 flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0, 0.55, 0.45, 1] }}
          >
            <h1 className={`text-6xl md:text-9xl font-display font-black leading-tight tracking-tighter mb-6 uppercase ${glitchActive ? 'glitch' : ''}`}>
              sigueme <span className="text-electric-orange">anda!!!</span>
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl font-light max-w-3xl text-foreground/80 leading-relaxed mb-10"
          >
            Estratega de Marca Personal & Experto en Inteligencia Artificial. Optimizo el tiempo humano eliminando lo operativo para potenciar tu creatividad.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Link to="/laboratorio" className="px-10 py-4 bg-electric-orange text-white rounded-full font-bold uppercase tracking-widest tech-heart-pulse active:scale-95 transition-all text-center">
              Laboratorio IA
            </Link>
            <button className="px-10 py-4 border border-foreground/20 rounded-full font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-all">
              Explorar Portfolio
            </button>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.03, y: -4 }}
          transition={{ 
            default: { duration: 0.3 },
            scale: { type: "spring", stiffness: 400, damping: 25 },
            y: { type: "spring", stiffness: 400, damping: 25 }
          }}
          className="mt-16 flex flex-col items-center mb-10 interactive cursor-none"
        >
          <div className="flex items-center space-x-3 mb-3 px-8 py-3 bg-white/[0.03] dark:bg-black/20 backdrop-blur-xl rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(255,102,0,0.1)] hover:border-electric-orange/30 transition-all duration-500">
            <Instagram className="text-electric-orange drop-shadow-[0_0_8px_rgba(255,102,0,0.5)]" size={28} />
            <span className="text-4xl md:text-5xl font-display font-black tracking-tighter text-foreground">
              +<span className="text-electric-orange"><AnimatedCounter value={19000} /></span>
            </span>
          </div>
          <span className="text-xs font-bold opacity-60 uppercase tracking-[0.4em] text-foreground">Comunidad Digital Global</span>
        </motion.div>
      </section>

      {/* Visual Engine - Grid Sections */}
      <section id="expertise" className="py-32 px-6 max-w-7xl mx-auto snap-start flex flex-col justify-center min-h-screen">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 space-y-6 md:space-y-0">
          <div className="max-w-2xl">
            <span className="text-electric-orange font-bold uppercase tracking-widest block mb-4">Core Philosophy</span>
            <h2 className={`text-4xl md:text-6xl font-display font-bold leading-none uppercase ${glitchActive ? 'glitch' : ''}`}>
              Metodología <br /> 
              <span className="opacity-40">Creativa</span>
            </h2>
          </div>
          <p className="text-foreground/50 max-w-sm text-right font-light italic">
            "La tecnología es el pincel, la ética es el lienzo."
          </p>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {[
            { icon: Zap, title: "Visual Engine", description: "Creación de contenido disruptivo (Foto y Video) con IA para marcas que buscan impacto inmediato.", link: "/laboratorio" },
            { icon: Cpu, title: "AI Web Architecture", description: "Diseño y desarrollo de sitios web inteligentes optimizados para conversión.", link: "/laboratorio" },
            { icon: ShieldCheck, title: "Strategic Advisory", description: "Consultoría y asesoramiento ético para implementar IA en flujos de trabajo reales.", link: "/metodologia" }
          ].map((service) => (
            <ServiceCard 
              key={service.title}
              icon={service.icon} 
              title={service.title} 
              description={service.description}
              link={service.link}
              delay={0}
            />
          ))}
        </motion.div>

        <div className="mt-12 text-center">
            <Link to="/laboratorio" className="inline-flex items-center space-x-2 text-electric-orange font-bold uppercase tracking-widest hover:translate-x-2 transition-transform">
                <span>EXPLORAR LABORATORIO COMPLETO</span>
                <ChevronRight size={20} />
            </Link>
        </div>
      </section>

      {/* AI Web Architecture - Parallax Segment */}
      <section id="architecture" className="py-32 relative overflow-hidden snap-start flex items-center min-h-screen">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, rotate: -5, filter: 'blur(15px)' }}
            whileInView={{ opacity: 1, rotate: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative order-2 lg:order-1"
          >
            <motion.div 
              style={{ y: yParallax }}
              className="relative z-10 w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10"
            >
              <img 
                src="https://images.unsplash.com/photo-1620121692029-d088224efc74?q=80&w=1932&auto=format&fit=crop" 
                alt="AI Concept Art" 
                className="w-full h-full object-cover scale-110"
                loading="lazy"
              />
            </motion.div>
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-electric-orange/30 blur-[100px] rounded-full opacity-50" />
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-500/20 blur-[120px] rounded-full opacity-50" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, rotate: 5, filter: 'blur(20px)' }}
            whileInView={{ opacity: 1, rotate: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="order-1 lg:order-2"
          >
            <span className="text-electric-orange font-bold uppercase tracking-[0.3em] block mb-6 px-1 border-l-2 border-electric-orange">Architecture</span>
            <h2 className={`text-5xl md:text-7xl font-display font-black mb-8 uppercase leading-tight ${glitchActive ? 'glitch' : ''}`}>
              AI Web <br /> <span className="opacity-30">Architecture</span>
            </h2>
            <p className="text-xl text-foreground/70 mb-10 leading-relaxed font-light">
              Diseñamos ecosistemas digitales donde la inteligencia artificial y la experiencia de usuario convergen para crear interfaces que respiran.
            </p>
            
            <ul className="space-y-8 mb-12">
              {[
                { icon: ShieldCheck, text: "Ética Digital Garantizada" },
                { icon: MousePointer2, text: "Interfaces Ultra-Reactivas" },
                { icon: Zap, text: "Desarrollo High-Performance" }
              ].map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: 30, rotate: 2 }}
                  whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (i * 0.15) }}
                  className="flex items-center space-x-6 text-xl font-medium group"
                >
                  <div className="text-electric-orange bg-electric-orange/10 p-3 rounded-xl group-hover:scale-110 transition-transform"><item.icon size={28} /></div>
                  <span className="tracking-tight">{item.text}</span>
                </motion.li>
              ))}
            </ul>

            <Link to="/metodologia" className="px-10 py-4 bg-electric-orange/10 border border-electric-orange text-electric-orange rounded-full font-bold uppercase tracking-widest hover:bg-electric-orange hover:text-white transition-all inline-block">
                VER METODOLOGÍA
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 px-6 text-center bg-electric-orange/5 relative overflow-hidden snap-start flex flex-col justify-center min-h-screen">
        <div className="absolute inset-0 bg-gradient-to-t from-dark-base to-transparent pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <h2 className="text-5xl md:text-7xl font-display font-black mb-10 uppercase leading-none">
            ¿Listo para <span className="text-electric-orange">evolucionar</span>?
          </h2>
          <p className="text-xl text-foreground/70 mb-12 font-light">
            Únete a los líderes que ya están optimizando su tiempo y presupuesto con IA ética.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8">
            <button className="px-16 py-6 bg-electric-orange text-white rounded-full font-bold text-xl uppercase tracking-widest tech-heart-pulse active:scale-95 transition-all shadow-2xl">
              AGENDAR TRANSFORMACIÓN
            </button>
            <Link to="/recursos" className="px-10 py-4 border border-electric-orange text-electric-orange rounded-full font-bold uppercase tracking-widest hover:bg-electric-orange hover:text-white transition-all">
                OBTENER RECURSOS GRATIS
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Footer / Connect */}
      <footer id="contact" className="py-20 border-t border-white/5 px-6 snap-end">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 text-foreground/40 text-sm">
          <div className="flex space-x-6">
            <Instagram className="hover:text-electric-orange cursor-pointer transition-colors" />
            <Globe className="hover:text-electric-orange cursor-pointer transition-colors" />
          </div>
          
          <div className="font-display uppercase tracking-widest font-bold text-foreground flex flex-col items-center">
            <Link to="/blog" className="text-electric-orange hover:underline mb-4 tracking-[0.2em]">LEER CRÓNICAS</Link>
            <span>&copy; 2026 ADAN_CB90 - FUTURE IS NOW</span>
          </div>

          <div className="flex space-x-8">
            <a href="#" className="glow-orange transition-all duration-300">Privacy</a>
            <a href="#" className="glow-orange transition-all duration-300">Digital Ethics</a>
          </div>
        </div>
      </footer>
    </PageTransition>
  );
}
