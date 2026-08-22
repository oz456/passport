import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, FileText, RefreshCw, Baby, Zap, AlertTriangle, Search, CheckCircle, MapPin, Globe, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  { icon: FileText, title: 'Apply for a passport', desc: 'First time applicant', link: '/journey', color: 'bg-retro-yellow', rotation: '-rotate-2' },
  { icon: RefreshCw, title: 'Renew / Reissue', desc: 'Expired or running out of pages', link: '/journey', color: 'bg-retro-pink', rotation: 'rotate-2' },
  { icon: Baby, title: 'Apply for a child', desc: 'For minors under 18 years', link: '/journey', color: 'bg-retro-orange', rotation: '-rotate-1' },
  { icon: Zap, title: 'Need it urgently?', desc: 'Tatkaal premium service', link: '/journey', color: 'bg-retro-blue', rotation: 'rotate-1' },
  { icon: AlertTriangle, title: 'Lost or damaged', desc: 'Report and replace', link: '/journey', color: 'bg-red-500', rotation: '-rotate-2' },
  { icon: Globe, title: "Indian abroad", desc: 'NRI / OCI services', link: '/help', color: 'bg-purple-400', rotation: 'rotate-2' },
];

export default function HomePage() {
  return (
    <div className="w-full relative">
      
      {/* Decorative stars */}
      <div className="absolute top-20 right-10 z-0 animate-[spin_10s_linear_infinite]">
        <Star className="w-16 h-16 text-retro-yellow fill-retro-yellow" strokeWidth={3} color="black" />
      </div>
      <div className="absolute top-60 left-10 z-0 animate-[spin_8s_linear_infinite_reverse]">
        <Star className="w-12 h-12 text-retro-pink fill-retro-pink" strokeWidth={3} color="black" />
      </div>
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center pt-10">
        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
          
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", bounce: 0.5 }}
            className="inline-block mb-4 md:mb-6"
          >
            <div className="bg-retro-orange border-[3px] border-retro-black px-4 md:px-6 py-1.5 md:py-2 rounded-full shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] md:shadow-retro rotate-[-5deg]">
              <span className="font-display text-lg md:text-2xl text-retro-black tracking-wider">OFFICIAL GOVERNMENT SERVICE!</span>
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl sm:text-7xl md:text-[8rem] font-display leading-[0.85] text-white text-stroke-lg mb-6 md:mb-8"
          >
            LET'S <span className="text-retro-yellow">TRIP!</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-3xl font-bold bg-white text-retro-black border-[3px] md:border-[4px] border-retro-black p-3 md:p-4 rounded-xl shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] md:shadow-retro max-w-3xl mx-auto rotate-1 mb-8 md:mb-12"
          >
            Get your Indian Passport sorted without the boring government vibes!
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center"
          >
            <Link to="/journey" className="retro-button bg-retro-yellow text-white text-stroke text-2xl md:text-3xl px-6 py-3 md:px-8 md:py-4">
              START JOURNEY!
            </Link>
            <Link to="/track" className="retro-button bg-white text-retro-black text-2xl md:text-3xl px-6 py-3 md:px-8 md:py-4">
              TRACK IT
            </Link>
          </motion.div>
          
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 relative z-10">
        <h2 className="text-5xl md:text-7xl font-display text-center text-white text-stroke-lg mb-16 rotate-[-2deg]">
          WHAT DO YOU NEED?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, type: "spring", bounce: 0.4 }}
            >
              <Link to={service.link} className="block group">
                <div className={`retro-card ${service.color} p-6 h-full ${service.rotation} group-hover:rotate-0 transition-transform duration-300`}>
                  <div className="w-16 h-16 bg-white border-[3px] border-retro-black rounded-full flex items-center justify-center mb-4 shadow-retro">
                    <service.icon className="w-8 h-8 text-retro-black" strokeWidth={2.5} />
                  </div>
                  <h3 className="font-display text-4xl text-white text-stroke leading-tight mb-2 uppercase">{service.title}</h3>
                  <p className="font-bold text-lg border-t-4 border-retro-black pt-2 mt-4 bg-white/40 p-2 rounded border-[3px]">{service.desc}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Journey Steps Comic Strip */}
      <section className="py-20 max-w-7xl mx-auto px-4 relative z-10">
        <div className="bg-retro-cream border-[5px] border-retro-black rounded-3xl p-8 shadow-retro-xl">
          <h2 className="text-4xl md:text-6xl font-display text-center text-white text-stroke-lg mb-12">
            HOW IT WORKS!
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { num: '1', title: 'CHECK', color: 'bg-retro-pink' },
              { num: '2', title: 'APPLY', color: 'bg-retro-yellow' },
              { num: '3', title: 'VISIT', color: 'bg-retro-orange' },
              { num: '4', title: 'FLY!', color: 'bg-retro-blue' }
            ].map((step, idx) => (
              <div key={idx} className="relative group">
                <div className={`${step.color} border-[4px] border-retro-black rounded-xl p-6 h-40 flex flex-col items-center justify-center shadow-retro group-hover:-translate-y-2 group-hover:shadow-retro-lg transition-all`}>
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-white border-[3px] border-retro-black rounded-full flex items-center justify-center font-display text-3xl font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    {step.num}
                  </div>
                  <span className="font-display text-4xl text-white text-stroke-lg tracking-wide">{step.title}</span>
                </div>
                {idx < 3 && (
                  <ArrowRight className="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 w-8 h-8 text-retro-black z-20" strokeWidth={4} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
