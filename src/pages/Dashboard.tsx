import { motion } from 'framer-motion';
import { FileText, Users, ArrowRight, CheckCircle2, Clock, MapPin, Bell, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="w-full space-y-8 pb-12 relative z-10">
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-retro-yellow border-[5px] border-retro-black p-8 md:p-10 rounded-3xl shadow-retro-xl flex flex-col sm:flex-row sm:items-center justify-between gap-6 rotate-1"
      >
        <div className="-rotate-1">
          <div className="inline-flex items-center gap-1.5 px-4 py-1 bg-white text-retro-black border-[3px] border-retro-black rounded-full font-display text-xl uppercase tracking-wider mb-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <Sparkles className="w-5 h-5 fill-retro-yellow" strokeWidth={3} /> DASHBOARD
          </div>
          <h1 className="text-5xl md:text-7xl font-display text-white text-stroke-lg uppercase tracking-wide">
            YO AARAV! 👋
          </h1>
        </div>
        <Link to="/journey" className="retro-button bg-retro-pink text-white text-stroke text-3xl whitespace-nowrap text-center -rotate-2 hover:rotate-0">
          NEW APP!
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Active Application */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-4xl font-display text-retro-black uppercase">Active App</h2>
              <Link to="/track" className="font-display text-2xl text-retro-blue hover:text-retro-pink flex items-center group transition-colors uppercase underline decoration-[3px] underline-offset-4">
                TRACK IT <ArrowRight className="w-6 h-6 ml-1 group-hover:translate-x-1 transition-transform" strokeWidth={4} />
              </Link>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
            >
              <Link to="/track" className="block group">
                <div className="bg-white border-[5px] border-retro-black rounded-3xl p-8 shadow-retro hover:shadow-retro-lg transition-all hover:-translate-y-1 hover:-translate-x-1">
                  
                  <div className="flex justify-between items-start mb-10">
                    <div>
                      <h3 className="font-display text-5xl text-retro-black group-hover:text-retro-orange transition-colors uppercase">Reissue</h3>
                      <p className="font-bold text-xl mt-2 border-[3px] border-retro-black inline-block px-3 py-1 bg-retro-cream shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] -rotate-2">
                        FILE: HYD07122026
                      </p>
                    </div>
                    <span className="px-4 py-2 bg-retro-yellow text-retro-black font-display text-2xl uppercase rounded-xl border-[3px] border-retro-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-3">
                      REVIEWING...
                    </span>
                  </div>
                  
                  {/* Simplified timeline */}
                  <div className="mb-8 relative px-4 bg-retro-cream border-[4px] border-retro-black rounded-2xl p-8 shadow-inner">
                    <div className="absolute top-1/2 left-8 right-8 h-2 bg-retro-black -translate-y-1/2 z-0 rounded-full"></div>
                    <div className="absolute top-1/2 left-8 w-[60%] h-2 bg-retro-green -translate-y-1/2 z-0 rounded-full"></div>
                    
                    <div className="flex justify-between relative z-10">
                      {[
                        { icon: CheckCircle2, status: 'done', label: 'Done' },
                        { icon: MapPin, status: 'done', label: 'Visit' },
                        { icon: Clock, status: 'done', label: 'Police' },
                        { icon: FileText, status: 'active', label: 'Review' },
                        { icon: ArrowRight, status: 'pending', label: 'Send' },
                      ].map((step, idx) => (
                        <div key={idx} className="flex flex-col items-center gap-2">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center border-[3px] border-retro-black transition-all duration-300 ${
                            step.status === 'done' ? 'bg-retro-green text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]' :
                            step.status === 'active' ? 'bg-retro-yellow text-retro-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] scale-125 -translate-y-1 rotate-6' :
                            'bg-white text-gray-400'
                          }`}>
                            <step.icon className="w-6 h-6" strokeWidth={3} />
                          </div>
                          <span className={`font-display text-xl uppercase ${step.status === 'pending' ? 'text-gray-400' : 'text-retro-black'}`}>
                            {step.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </section>

          {/* Family Mode */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-4xl font-display text-retro-black uppercase">Family Apps</h2>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white border-[5px] border-retro-black rounded-3xl overflow-hidden shadow-retro"
            >
              <div className="overflow-x-auto">
                <table className="w-full text-left font-bold text-lg">
                  <thead className="bg-retro-cream border-b-[4px] border-retro-black font-display text-2xl">
                    <tr>
                      <th className="px-6 py-4">WHO</th>
                      <th className="px-6 py-4">TYPE</th>
                      <th className="px-6 py-4">READY</th>
                      <th className="px-6 py-4">ACTION</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y-[3px] divide-retro-black">
                    <tr className="hover:bg-retro-green hover:text-white transition-colors group">
                      <td className="px-6 py-5 uppercase text-2xl font-display">You</td>
                      <td className="px-6 py-5">Reissue</td>
                      <td className="px-6 py-5">
                        <div className="w-24 h-4 bg-white border-2 border-retro-black rounded-full overflow-hidden shadow-inner">
                          <div className="bg-retro-green h-full w-full"></div>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <Link to="/track" className="underline decoration-4 underline-offset-4 group-hover:text-white">Track</Link>
                      </td>
                    </tr>
                    <tr className="hover:bg-retro-yellow transition-colors group">
                      <td className="px-6 py-5 uppercase text-2xl font-display">Aditi <span className="text-sm">(Wife)</span></td>
                      <td className="px-6 py-5">Reissue</td>
                      <td className="px-6 py-5">
                        <div className="w-24 h-4 bg-white border-2 border-retro-black rounded-full overflow-hidden shadow-inner">
                          <div className="bg-retro-blue h-full w-[80%]"></div>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <Link to="/apply" className="underline decoration-4 underline-offset-4">Go</Link>
                      </td>
                    </tr>
                    <tr className="hover:bg-retro-orange transition-colors group">
                      <td className="px-6 py-5 uppercase text-2xl font-display">Rohan <span className="text-sm">(Kid)</span></td>
                      <td className="px-6 py-5">Fresh</td>
                      <td className="px-6 py-5">
                        <div className="w-24 h-4 bg-white border-2 border-retro-black rounded-full overflow-hidden shadow-inner">
                          <div className="bg-retro-pink h-full w-[65%]"></div>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <Link to="/eligibility" className="underline decoration-4 underline-offset-4">Prep</Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          </section>
        </div>
        
        {/* Sidebar */}
        <div className="space-y-8">
          
          {/* Notifications */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-retro-pink border-[5px] border-retro-black rounded-3xl p-8 shadow-retro text-white rotate-1"
          >
            <h3 className="font-display text-4xl text-white text-stroke uppercase mb-6 flex items-center gap-3">
              ALERTS! <Bell className="w-8 h-8 fill-white" strokeWidth={2} />
            </h3>
            
            <div className="space-y-4">
              <div className="bg-white text-retro-black border-[3px] border-retro-black rounded-xl p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-1 hover:rotate-0 transition-transform">
                <p className="font-display text-2xl uppercase leading-tight">Police Ver. Done!</p>
                <p className="font-bold">2 days ago</p>
              </div>
              <div className="bg-retro-yellow text-retro-black border-[3px] border-retro-black rounded-xl p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-1 hover:rotate-0 transition-transform">
                <p className="font-display text-2xl uppercase leading-tight">Bring Docs Tomorrow!</p>
                <p className="font-bold">Appt @ 9:00 AM</p>
              </div>
            </div>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-retro-blue border-[5px] border-retro-black rounded-3xl p-8 shadow-retro text-white -rotate-1"
          >
            <h3 className="font-display text-4xl text-white text-stroke uppercase mb-6">QUICK JUMPS</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/locate-psk" className="block bg-white text-retro-black border-[3px] border-retro-black p-4 rounded-xl font-display text-2xl uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-retro-lg transition-all">
                  Find Office →
                </Link>
              </li>
              <li>
                <Link to="/help" className="block bg-white text-retro-black border-[3px] border-retro-black p-4 rounded-xl font-display text-2xl uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-retro-lg transition-all">
                  Doc Help →
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>
        
      </div>
    </div>
  );
}
