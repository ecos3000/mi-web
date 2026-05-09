import { motion } from 'motion/react';
import PageTransition from '../components/PageTransition';

export default function Laboratorio() {
  return (
    <PageTransition>
      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <header className="mb-20 text-center">
          <span className="text-electric-orange font-bold uppercase tracking-[0.4em] block mb-4">Portfolio</span>
          <h1 className="text-6xl md:text-8xl font-display font-black uppercase leading-none mb-8">
            Laboratorio <br /> <span className="opacity-30">de IA</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-foreground/70 font-light">
            Vitrina de trabajos realizados. Muestra el poder disruptivo de tus creaciones visuales a través de la inteligencia artificial.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            { id: 1, title: 'Holographic Ecosystems', category: 'Visual Art', img: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop' },
            { id: 2, title: 'Neural Architectures', category: 'Web Concept', img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop' },
            { id: 3, title: 'Synthetic Organics', category: 'Motion Design', img: 'https://images.unsplash.com/photo-1633167606207-d840b5070fc2?q=80&w=1974&auto=format&fit=crop' },
            { id: 4, title: 'Digital Spirits', category: 'Human Centric', img: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=1954&auto=format&fit=crop' },
          ].map((item, idx) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="group relative aspect-video rounded-3xl overflow-hidden border border-white/10"
            >
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-8 flex flex-col justify-end">
                <span className="text-electric-orange font-bold uppercase tracking-widest text-xs mb-2">{item.category}</span>
                <h3 className="text-3xl font-display font-bold text-white uppercase">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </section>

        <section className="mt-32 p-12 bg-white/5 backdrop-blur-md rounded-[3rem] border border-white/5 flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
                <h2 className="text-4xl font-display font-bold uppercase mb-6">Galería 3D</h2>
                <p className="text-foreground/70 text-lg leading-relaxed mb-8">
                    Un render de un espacio futurista con marcos flotantes que muestran videos en loop de paisajes generados con IA. Esta sección representa la frontera entre lo físico y lo digital.
                </p>
                <div className="flex space-x-4">
                    <div className="w-12 h-12 rounded-full border border-electric-orange flex items-center justify-center text-electric-orange">01</div>
                    <div className="w-12 h-12 rounded-full border border-electric-orange flex items-center justify-center text-electric-orange">02</div>
                    <div className="w-12 h-12 rounded-full border border-electric-orange flex items-center justify-center text-electric-orange">03</div>
                </div>
            </div>
            <div className="flex-1 w-full aspect-square bg-gradient-to-br from-electric-orange/20 to-blue-500/10 rounded-2xl flex items-center justify-center overflow-hidden border border-white/10 relative group">
                <img 
                    src="https://images.unsplash.com/photo-1620121692029-d088224efc74?q=80&w=1932&auto=format&fit=crop" 
                    alt="Galería 3D Placeholder" 
                    className="w-full h-full object-cover opacity-50 transition-transform duration-1000 group-hover:scale-125" 
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-electric-orange text-white px-6 py-2 rounded-full font-bold uppercase tracking-widest text-xs animate-pulse">Inmersive View Active</span>
                </div>
            </div>
        </section>
      </div>
    </PageTransition>
  );
}
