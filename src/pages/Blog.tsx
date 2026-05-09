import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';

export default function Blog() {
  return (
    <PageTransition>
      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <header className="mb-20">
            <span className="text-electric-orange font-bold uppercase tracking-[0.4em] block mb-4">Insights</span>
            <h1 className="text-6xl md:text-8xl font-display font-black uppercase leading-none mb-8">
                Crónicas <br /> <span className="opacity-30">del Futuro</span>
            </h1>
            <p className="max-w-2xl text-xl text-foreground/70 font-light">
                Análisis de tendencias de IA. Posicionamiento como líder de opinión y visión disruptiva de lo que está por venir.
            </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-32">
            {[
                { title: "La muerte del Prompt Engineering", date: "May 10, 2026", author: "adan_cb90", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1932&auto=format&fit=crop" },
                { title: "Ética vs Velocidad: El gran dilema", date: "May 05, 2026", author: "adan_cb90", img: "https://images.unsplash.com/photo-1620712943543-bcc4638d9fde?q=80&w=1954&auto=format&fit=crop" },
                { title: "IA Generativa en el Mundo Real", date: "Apr 28, 2026", author: "adan_cb90", img: "https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=2070&auto=format&fit=crop" }
            ].map((post, idx) => (
                <motion.article 
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex flex-col bg-white/5 backdrop-blur-md border border-white/5 rounded-3xl overflow-hidden hover:border-electric-orange/30 transition-all group"
                >
                    <div className="h-64 overflow-hidden relative">
                        <img 
                            src={post.img} 
                            alt={post.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white text-xs px-4 py-2 rounded-full border border-white/10 uppercase tracking-widest font-bold">Trend Analysis</div>
                    </div>
                    <div className="p-8 flex-1 flex flex-col">
                        <div className="flex items-center space-x-4 text-xs text-foreground/40 mb-6 uppercase tracking-widest font-bold">
                            <span className="flex items-center space-x-1"><Calendar size={14} /> <span>{post.date}</span></span>
                            <span className="flex items-center space-x-1"><User size={14} /> <span>{post.author}</span></span>
                        </div>
                        <h3 className="text-2xl font-display font-black uppercase mb-6 flex-1 group-hover:text-electric-orange transition-colors">{post.title}</h3>
                        <button className="flex items-center space-x-2 text-electric-orange font-bold uppercase tracking-widest text-sm hover:translate-x-2 transition-transform">
                            <span>Continuar leyendo</span>
                            <ArrowRight size={16} />
                        </button>
                    </div>
                </motion.article>
            ))}
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center p-12 lg:p-20 bg-gradient-to-br from-electric-orange/10 to-transparent rounded-[4rem] border border-white/5">
            <div>
                <h2 className="text-4xl lg:text-6xl font-display font-black uppercase mb-8 leading-tight">Ojo de la IA</h2>
                <p className="text-xl text-foreground/70 font-light mb-10 leading-relaxed italic">
                    "Un primer plano de un ojo humano cuyo iris es un circuito digital naranja procesando datos. Observamos el futuro no con miedo, sino con discernimiento."
                </p>
                <div className="flex flex-col space-y-4">
                    <div className="h-1 w-20 bg-electric-orange" />
                    <span className="font-display font-bold uppercase tracking-[0.4em] opacity-40">Insight Vision 0.1</span>
                </div>
            </div>
            <div className="relative aspect-square">
                <img 
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop" 
                    alt="Ojo de la IA Placeholder" 
                    className="w-full h-full object-cover rounded-full border-8 border-white/5 shadow-2xl invert dark:invert-0"
                />
                <div className="absolute inset-0 bg-electric-orange/20 mix-blend-color rounded-full pointer-events-none" />
                <div className="absolute inset-0 border border-electric-orange/50 rounded-full animate-ping opacity-20" />
            </div>
        </section>
      </div>
    </PageTransition>
  );
}
