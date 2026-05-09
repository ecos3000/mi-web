import { motion } from 'motion/react';
import { ShieldCheck, Heart, Zap, Cpu } from 'lucide-react';
import PageTransition from '../components/PageTransition';

export default function Metodologia() {
  return (
    <PageTransition>
      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <header className="mb-20">
          <span className="text-electric-orange font-bold uppercase tracking-[0.4em] block mb-4">Human-Centric AI</span>
          <h1 className="text-6xl md:text-8xl font-display font-black uppercase leading-none mb-8">
            Nuestro <br /> <span className="opacity-30">ADN Ético</span>
          </h1>
          <p className="max-w-2xl text-xl text-foreground/70 font-light">
            Detalle de cómo trabajamos. Mi diferenciador como experto que respeta el concepto humano por encima del algoritmo.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="relative group">
            <div className="aspect-square rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=2070&auto=format&fit=crop" 
                alt="Simbiósis Digital" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-electric-orange/20 blur-[100px] rounded-full" />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-500/20 blur-[100px] rounded-full" />
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="bg-white/10 backdrop-blur-xl border border-white/20 px-8 py-4 rounded-2xl text-white font-bold uppercase tracking-widest text-sm">Simbiósis Digital</span>
            </div>
          </div>

          <div className="space-y-12">
            {[
              { icon: Heart, title: "Respeto Humano", desc: "La IA no sustituye, amplifica. Mis procesos están diseñados para proteger la esencia creativa del autor." },
              { icon: ShieldCheck, title: "Transparencia Total", desc: "Uso de herramientas auditables y éticas. Sabemos de dónde vienen los datos y cómo se procesan." },
              { icon: Zap, title: "Eficiencia Consciente", desc: "Eliminamos lo tedioso no por pereza, sino para liberar espacio mental para lo que importa." },
              { icon: Cpu, title: "Soberanía Tecnológica", desc: "Te enseñamos a dominar la herramienta, no a ser esclavo de ella." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="flex items-start space-x-6"
              >
                <div className="mt-1 w-12 h-12 bg-electric-orange/10 rounded-xl flex items-center justify-center text-electric-orange border border-electric-orange/20">
                  <item.icon size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold uppercase mb-2">{item.title}</h3>
                  <p className="text-foreground/60 leading-relaxed max-w-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <section className="p-16 bg-electric-orange text-white rounded-[4rem] text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
            <h2 className="text-4xl md:text-6xl font-display font-black uppercase mb-8 relative z-10">El equilibrio es el futuro</h2>
            <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto opacity-90 mb-12 relative z-10">
                Combinamos una mano humana de textura realista tocando una mano robótica de luz naranja, simbolizando el equilibrio perfecto entre técnica y alma.
            </p>
            <button className="px-12 py-5 bg-white text-electric-orange rounded-full font-bold uppercase tracking-widest hover:scale-105 active:scale-95 transition-all text-lg shadow-xl relative z-10">
                Agendar Consulta Ética
            </button>
        </section>
      </div>
    </PageTransition>
  );
}
