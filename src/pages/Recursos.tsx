import { motion } from 'motion/react';
import { Download, FileText, Code, Ghost, Mail } from 'lucide-react';
import PageTransition from '../components/PageTransition';

export default function Recursos() {
  return (
    <PageTransition>
      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <header className="mb-20 text-center">
            <span className="bg-electric-orange/10 border border-electric-orange/50 px-6 py-2 rounded-full text-electric-orange font-bold uppercase tracking-widest text-xs inline-block mb-6">Free Downloads</span>
            <h1 className="text-6xl md:text-8xl font-display font-black uppercase leading-none mb-8">
                Resource <br /> <span className="opacity-30">Hub</span>
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-foreground/70 font-light">
                Zona de descarga de prompts, guías y herramientas exclusivas para optimizar tu flujo de trabajo con IA.
            </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
            {[
                { icon: Ghost, title: "Master Prompt Pack", desc: "Colección de 50 prompts refinados para midjourney y GPT." },
                { icon: FileText, title: "Guía de Ética IA", desc: "Manual para implementar IA de forma responsable en tu marca." },
                { icon: Code, title: "Workflow Templates", desc: "Estructuras pre-configuradas para automatizar tareas repetitivas." }
            ].map((resource, idx) => (
                <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl group hover:border-electric-orange transition-all duration-300"
                >
                    <div className="w-16 h-16 bg-electric-orange/20 rounded-2xl flex items-center justify-center text-electric-orange mb-6 group-hover:scale-110 transition-transform">
                        <resource.icon size={32} />
                    </div>
                    <h3 className="text-2xl font-display font-bold uppercase mb-4">{resource.title}</h3>
                    <p className="text-foreground/60 mb-8">{resource.desc}</p>
                    <button className="w-full py-4 bg-white/10 hover:bg-electric-orange hover:text-white rounded-xl font-bold uppercase tracking-widest transition-all flex items-center justify-center space-x-2">
                        <Download size={18} />
                        <span>Descargar ahora</span>
                    </button>
                </motion.div>
            ))}
        </div>

        <section className="relative overflow-hidden p-12 lg:p-20 bg-dark-base rounded-[4rem] border border-white/10">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-electric-orange/10 to-transparent" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                <div>
                    <h2 className="text-4xl lg:text-6xl font-display font-black uppercase mb-8 leading-tight">
                        Kit de <br /> <span className="text-electric-orange">Herramientas</span> Neón
                    </h2>
                    <p className="text-xl text-foreground/70 font-light mb-10 leading-relaxed">
                        Un maletín digital abierto proyectando iconos de documentos y códigos en color naranja vibrante. Suscríbete para recibir el acceso instantáneo.
                    </p>
                    <form className="flex flex-col sm:flex-row gap-4">
                        <div className="flex-1 relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/40" size={20} />
                            <input 
                                type="email" 
                                placeholder="tu@email.com" 
                                className="w-full bg-white/5 border border-white/10 py-5 pl-12 pr-6 rounded-2xl focus:border-electric-orange outline-none transition-all"
                            />
                        </div>
                        <button className="px-8 py-5 bg-electric-orange text-white rounded-2xl font-bold uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl">
                            Enviar Kit
                        </button>
                    </form>
                </div>
                <div className="hidden lg:block relative h-[400px]">
                    <div className="absolute inset-0 bg-electric-orange/20 blur-[100px] rounded-full animate-pulse" />
                    <img 
                        src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=1974&auto=format&fit=crop" 
                        alt="Digital Briefcase" 
                        className="w-full h-full object-cover rounded-3xl shadow-2xl skew-x-3 opacity-80"
                    />
                </div>
            </div>
        </section>
      </div>
    </PageTransition>
  );
}
